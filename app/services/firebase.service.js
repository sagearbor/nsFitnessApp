"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var backend_service_1 = require("./backend.service");
var firebase = require("nativescript-plugin-firebase");
var Observable_1 = require("rxjs/Observable");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var utils_service_1 = require("./utils.service");
require("rxjs/add/operator/share");
var FirebaseService = (function () {
    function FirebaseService(ngZone, utils) {
        this.ngZone = ngZone;
        this.utils = utils;
        this.items = new BehaviorSubject_1.BehaviorSubject([]);
        this._allItems = [];
    }
    FirebaseService.prototype.register = function (user) {
        return firebase.createUser({
            email: user.email,
            password: user.password
        }).then(function (result) {
            return JSON.stringify(result);
        }, function (errorMessage) {
            alert(errorMessage);
        });
    };
    FirebaseService.prototype.login = function (user) {
        return firebase.login({
            type: firebase.LoginType.PASSWORD,
            // this is only required in type == PASSWORD
            passwordOptions: {
                email: user.email,
                password: user.password
            }
        }).then(function (result) {
            backend_service_1.BackendService.token = result.uid;
            return JSON.stringify(result);
        }, function (errorMessage) {
            alert(errorMessage);
        });
    };
    FirebaseService.prototype.logout = function () {
        backend_service_1.BackendService.token = "";
        firebase.logout();
    };
    FirebaseService.prototype.resetPassword = function (email) {
        return firebase.resetPassword({
            email: email
        }).then(function (result) {
            alert(JSON.stringify(result));
        }, function (errorMessage) {
            alert(errorMessage);
        }).catch(this.handleErrors);
    };
    FirebaseService.prototype.getMyWishList = function () {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var path = 'Gifts';
            var onValueEvent = function (snapshot) {
                _this.ngZone.run(function () {
                    var results = _this.handleSnapshot(snapshot.value);
                    console.log(JSON.stringify(results));
                    observer.next(results);
                });
            };
            firebase.addValueEventListener(onValueEvent, "/" + path);
        }).share();
    };
    FirebaseService.prototype.getMyGroupList = function () {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var path = 'Groups';
            var onValueEvent = function (snapshot) {
                _this.ngZone.run(function () {
                    var results = _this.handleSnapshot(snapshot.value);
                    console.log(JSON.stringify(results));
                    observer.next(results);
                });
            };
            firebase.addValueEventListener(onValueEvent, "/" + path);
        }).share();
    };
    FirebaseService.prototype.getMyGift = function (id) {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            observer.next(_this._allItems.filter(function (s) { return s.id === id; })[0]);
        }).share();
    };
    FirebaseService.prototype.getMyMessage = function () {
        return new Observable_1.Observable(function (observer) {
            firebase.getRemoteConfig({
                developerMode: false,
                cacheExpirationSeconds: 300,
                properties: [{
                        key: "message",
                        default: "Happy Holidays!"
                    }]
            }).then(function (result) {
                console.log("Fetched at " + result.lastFetch + (result.throttled ? " (throttled)" : ""));
                for (var entry in result.properties) {
                    observer.next(result.properties[entry]);
                }
            });
        }).share();
    };
    FirebaseService.prototype.handleSnapshot = function (data) {
        //empty array, then refill and filter
        this._allItems = [];
        if (data) {
            for (var id in data) {
                var result = Object.assign({ id: id }, data[id]);
                if (backend_service_1.BackendService.token === result.UID) {
                    this._allItems.push(result);
                }
            }
            this.publishUpdates();
        }
        return this._allItems;
    };
    FirebaseService.prototype.publishUpdates = function () {
        // here, we sort must emit a *new* value (immutability!)
        this._allItems.sort(function (a, b) {
            if (a.date < b.date)
                return -1;
            if (a.date > b.date)
                return 1;
            return 0;
        });
        this.items.next(this._allItems.slice());
    };
    FirebaseService.prototype.add = function (gift) {
        return firebase.push("/Gifts", { "name": gift, "UID": backend_service_1.BackendService.token, "date": 0 - Date.now(), "imagepath": "" }).then(function (result) {
            return 'Gift added to your wishlist!';
        }, function (errorMessage) {
            console.log(errorMessage);
        });
    };
    FirebaseService.prototype.addGroup = function (group, description, domainname, privacy, admins, members) {
        return firebase.push("/Groups", { "name": group, "description": description, "domainname": domainname, "privacy": privacy, "admins": admins, "members": members, "dateInMilliseconds": 0 - Date.now() }).then(function (result) {
            return 'Group added - you are admin of the group!';
        }, function (errorMessage) {
            console.log(errorMessage);
        });
    };
    FirebaseService.prototype.addNewUser = function (email, userUID, fName, lName, dob, gender, weight, goalWeight, favActivity) {
        return firebase.push("/Users", { "email": email, "userUID": userUID, "fName": fName, "lName": lName, "dob": dob, "gender": gender, "weight": weight, "goalWeight": goalWeight, "favActivity": favActivity }).then(function (result) {
            return 'User added2';
        }, function (errorMessage) {
            console.log(errorMessage);
        });
    };
    FirebaseService.prototype.editGift = function (id, description, imagepath) {
        this.publishUpdates();
        return firebase.update("/Gifts/" + id + "", {
            description: description,
            imagepath: imagepath
        })
            .then(function (result) {
            return 'You have successfully edited this gift!';
        }, function (errorMessage) {
            console.log(errorMessage);
        });
    };
    FirebaseService.prototype.editDescription = function (id, description) {
        this.publishUpdates();
        return firebase.update("/Gifts/" + id + "", {
            description: description
        })
            .then(function (result) {
            return 'You have successfully edited the description!';
        }, function (errorMessage) {
            console.log(errorMessage);
        });
    };
    FirebaseService.prototype.delete = function (gift) {
        return firebase.remove("/Gifts/" + gift.id + "")
            .catch(this.handleErrors);
    };
    FirebaseService.prototype.uploadFile = function (localPath, file) {
        var filename = this.utils.getFilename(localPath);
        var remotePath = "" + filename;
        return firebase.uploadFile({
            remoteFullPath: remotePath,
            localFullPath: localPath,
            onProgress: function (status) {
                console.log("Uploaded fraction: " + status.fractionCompleted);
                console.log("Percentage complete: " + status.percentageCompleted);
            }
        });
    };
    FirebaseService.prototype.getDownloadUrl = function (remoteFilePath) {
        return firebase.getDownloadUrl({
            remoteFullPath: remoteFilePath
        })
            .then(function (url) {
            return url;
        }, function (errorMessage) {
            console.log(errorMessage);
        });
    };
    FirebaseService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error));
        return Promise.reject(error.message);
    };
    return FirebaseService;
}());
FirebaseService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_1.NgZone,
        utils_service_1.UtilsService])
], FirebaseService);
exports.FirebaseService = FirebaseService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpcmViYXNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUQ7QUFFakQscURBQW1EO0FBQ25ELHVEQUEwRDtBQUMxRCw4Q0FBMkM7QUFDM0Msd0RBQXFEO0FBQ3JELGlEQUE2QztBQUM3QyxtQ0FBaUM7QUFHakMsSUFBYSxlQUFlO0lBQzFCLHlCQUNVLE1BQWMsRUFDZCxLQUFtQjtRQURuQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsVUFBSyxHQUFMLEtBQUssQ0FBYztRQUc3QixVQUFLLEdBQWlDLElBQUksaUNBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUV0RCxjQUFTLEdBQWdCLEVBQUUsQ0FBQztJQUpsQyxDQUFDO0lBTUgsa0NBQVEsR0FBUixVQUFTLElBQVU7UUFDakIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7WUFDekIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtTQUN4QixDQUFDLENBQUMsSUFBSSxDQUNELFVBQVUsTUFBVTtZQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2QyxDQUFDLEVBQ00sVUFBVSxZQUFnQjtZQUN4QixLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDdEIsQ0FBQyxDQUNKLENBQUE7SUFDTCxDQUFDO0lBRUQsK0JBQUssR0FBTCxVQUFNLElBQVU7UUFDZCxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNwQixJQUFJLEVBQUUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRO1lBQ2pDLDRDQUE0QztZQUM1QyxlQUFlLEVBQUU7Z0JBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO2dCQUNqQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7YUFDdEI7U0FDUCxDQUFDLENB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UCw0QkFBWTtHQUhsQixlQUFlLENBa1AzQjtBQWxQWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZSwgTmdab25lfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtVc2VyLCBHaWZ0LCBHcm91cH0gZnJvbSBcIi4uL21vZGVsc1wiO1xuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tIFwiLi9iYWNrZW5kLnNlcnZpY2VcIjtcbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3R9IGZyb20gJ3J4anMvQmVoYXZpb3JTdWJqZWN0JztcbmltcG9ydCB7VXRpbHNTZXJ2aWNlfSBmcm9tICcuL3V0aWxzLnNlcnZpY2UnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9zaGFyZSc7XG4gICBcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaXJlYmFzZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgdXRpbHM6IFV0aWxzU2VydmljZVxuICApe31cbiAgICBcbiAgaXRlbXM6IEJlaGF2aW9yU3ViamVjdDxBcnJheTxHaWZ0Pj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFtdKTtcbiAgXG4gIHByaXZhdGUgX2FsbEl0ZW1zOiBBcnJheTxHaWZ0PiA9IFtdO1xuICBcbiAgcmVnaXN0ZXIodXNlcjogVXNlcikge1xuICAgIHJldHVybiBmaXJlYmFzZS5jcmVhdGVVc2VyKHtcbiAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmRcbiAgICB9KS50aGVuKFxuICAgICAgICAgIGZ1bmN0aW9uIChyZXN1bHQ6YW55KSB7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkocmVzdWx0KTtcblx0ICB9LFxuICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2U6YW55KSB7XG4gICAgICAgICAgICBhbGVydChlcnJvck1lc3NhZ2UpO1xuICAgICAgICAgIH1cbiAgICAgIClcbiAgfVxuXG4gIGxvZ2luKHVzZXI6IFVzZXIpIHtcbiAgICByZXR1cm4gZmlyZWJhc2UubG9naW4oe1xuICAgICAgdHlwZTogZmlyZWJhc2UuTG9naW5UeXBlLlBBU1NXT1JELCAvLyBvciBHT09HTEUgLyBGQUNFQk9PS1xuICAgICAgLy8gdGhpcyBpcyBvbmx5IHJlcXVpcmVkIGluIHR5cGUgPT0gUEFTU1dPUkRcbiAgICAgIHBhc3N3b3JkT3B0aW9uczoge1xuICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmQgXG4gICAgICAgIH1cblx0fSkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICAgICBCYWNrZW5kU2VydmljZS50b2tlbiA9IHJlc3VsdC51aWQ7XG4gICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XG4gICAgICB9LCAoZXJyb3JNZXNzYWdlOiBhbnkpID0+IHtcbiAgICAgICAgYWxlcnQoZXJyb3JNZXNzYWdlKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgbG9nb3V0KCl7XG4gICAgQmFja2VuZFNlcnZpY2UudG9rZW4gPSBcIlwiO1xuICAgIGZpcmViYXNlLmxvZ291dCgpOyAgICBcbiAgfVxuICBcbiAgcmVzZXRQYXNzd29yZChlbWFpbCkge1xuICAgIHJldHVybiBmaXJlYmFzZS5yZXNldFBhc3N3b3JkKHtcbiAgICBlbWFpbDogZW1haWxcbiAgICB9KS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgICAgIGFsZXJ0KEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlOmFueSkge1xuICAgICAgICAgIGFsZXJ0KGVycm9yTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICApLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcbiAgfVxuXG4gIGdldE15V2lzaExpc3QoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBhbnkpID0+IHtcbiAgICAgIGxldCBwYXRoID0gJ0dpZnRzJztcbiAgICAgIFxuICAgICAgICBsZXQgb25WYWx1ZUV2ZW50ID0gKHNuYXBzaG90OiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHJlc3VsdHMgPSB0aGlzLmhhbmRsZVNuYXBzaG90KHNuYXBzaG90LnZhbHVlKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3VsdHMpKVxuICAgICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzdWx0cyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGZpcmViYXNlLmFkZFZhbHVlRXZlbnRMaXN0ZW5lcihvblZhbHVlRXZlbnQsIGAvJHtwYXRofWApO1xuICAgIH0pLnNoYXJlKCk7ICAgICAgICAgICAgICBcbiAgfVxuXG4gIGdldE15R3JvdXBMaXN0KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogYW55KSA9PiB7XG4gICAgICBsZXQgcGF0aCA9ICdHcm91cHMnO1xuXG4gICAgICAgIGxldCBvblZhbHVlRXZlbnQgPSAoc25hcHNob3Q6IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0cyA9IHRoaXMuaGFuZGxlU25hcHNob3Qoc25hcHNob3QudmFsdWUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzdWx0cykpXG4gICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXN1bHRzKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgZmlyZWJhc2UuYWRkVmFsdWVFdmVudExpc3RlbmVyKG9uVmFsdWVFdmVudCwgYC8ke3BhdGh9YCk7XG4gICAgfSkuc2hhcmUoKTtcbiAgfVxuXG5cbiAgZ2V0TXlHaWZ0KGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IGFueSkgPT4ge1xuICAgICAgb2JzZXJ2ZXIubmV4dCh0aGlzLl9hbGxJdGVtcy5maWx0ZXIocyA9PiBzLmlkID09PSBpZClbMF0pO1xuICAgIH0pLnNoYXJlKCk7XG4gIH1cblxuICBnZXRNeU1lc3NhZ2UoKTogT2JzZXJ2YWJsZTxhbnk+e1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6YW55KSA9PiB7XG4gICAgICBmaXJlYmFzZS5nZXRSZW1vdGVDb25maWcoe1xuICAgICAgZGV2ZWxvcGVyTW9kZTogZmFsc2UsIC8vIHBsYXkgd2l0aCB0aGlzIGJvb2xlYW4gdG8gZ2V0IG1vcmUgZnJlcXVlbnQgdXBkYXRlcyBkdXJpbmcgZGV2ZWxvcG1lbnRcbiAgICAgIGNhY2hlRXhwaXJhdGlvblNlY29uZHM6IDMwMCwgLy8gMTAgbWludXRlcywgZGVmYXVsdCBpcyAxMiBob3Vycy4uIHNldCB0byBhIGxvd2VyIHZhbHVlIGR1cmluZyBkZXZcbiAgICAgIHByb3BlcnRpZXM6IFt7XG4gICAgICBrZXk6IFwibWVzc2FnZVwiLFxuICAgICAgZGVmYXVsdDogXCJIYXBweSBIb2xpZGF5cyFcIlxuICAgIH1dXG4gIH0pLnRoZW4oXG4gICAgICAgIGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkZldGNoZWQgYXQgXCIgKyByZXN1bHQubGFzdEZldGNoICsgKHJlc3VsdC50aHJvdHRsZWQgPyBcIiAodGhyb3R0bGVkKVwiIDogXCJcIikpO1xuICAgICAgICAgIGZvciAobGV0IGVudHJ5IGluIHJlc3VsdC5wcm9wZXJ0aWVzKSBcbiAgICAgICAgICAgIHsgXG4gICAgICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzdWx0LnByb3BlcnRpZXNbZW50cnldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICk7XG4gIH0pLnNoYXJlKCk7XG59XG5cbiAgICBcblxuICBoYW5kbGVTbmFwc2hvdChkYXRhOiBhbnkpIHtcbiAgICAvL2VtcHR5IGFycmF5LCB0aGVuIHJlZmlsbCBhbmQgZmlsdGVyXG4gICAgdGhpcy5fYWxsSXRlbXMgPSBbXTtcbiAgICBpZiAoZGF0YSkge1xuICAgICAgZm9yIChsZXQgaWQgaW4gZGF0YSkgeyAgICAgICAgXG4gICAgICAgIGxldCByZXN1bHQgPSAoPGFueT5PYmplY3QpLmFzc2lnbih7aWQ6IGlkfSwgZGF0YVtpZF0pO1xuICAgICAgICBpZihCYWNrZW5kU2VydmljZS50b2tlbiA9PT0gcmVzdWx0LlVJRCl7XG4gICAgICAgICAgdGhpcy5fYWxsSXRlbXMucHVzaChyZXN1bHQpO1xuICAgICAgICB9ICAgICAgICBcbiAgICAgIH1cbiAgICAgIHRoaXMucHVibGlzaFVwZGF0ZXMoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2FsbEl0ZW1zO1xuICB9XG5cbiAgIHB1Ymxpc2hVcGRhdGVzKCkge1xuICAgIC8vIGhlcmUsIHdlIHNvcnQgbXVzdCBlbWl0IGEgKm5ldyogdmFsdWUgKGltbXV0YWJpbGl0eSEpXG4gICAgdGhpcy5fYWxsSXRlbXMuc29ydChmdW5jdGlvbihhLCBiKXtcbiAgICAgICAgaWYoYS5kYXRlIDwgYi5kYXRlKSByZXR1cm4gLTE7XG4gICAgICAgIGlmKGEuZGF0ZSA+IGIuZGF0ZSkgcmV0dXJuIDE7XG4gICAgICByZXR1cm4gMDtcbiAgICB9KVxuICAgIHRoaXMuaXRlbXMubmV4dChbLi4udGhpcy5fYWxsSXRlbXNdKTtcbiAgfVxuXG4gIGFkZChnaWZ0OiBzdHJpbmcpIHsgICBcbiAgICByZXR1cm4gZmlyZWJhc2UucHVzaChcbiAgICAgICAgXCIvR2lmdHNcIixcbiAgICAgICAgeyBcIm5hbWVcIjogZ2lmdCwgXCJVSURcIjogQmFja2VuZFNlcnZpY2UudG9rZW4sIFwiZGF0ZVwiOiAwIC0gRGF0ZS5ub3coKSwgXCJpbWFnZXBhdGhcIjogXCJcIn1cbiAgICAgICkudGhlbihcbiAgICAgICAgZnVuY3Rpb24gKHJlc3VsdDphbnkpIHtcbiAgICAgICAgICByZXR1cm4gJ0dpZnQgYWRkZWQgdG8geW91ciB3aXNobGlzdCEnO1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlOmFueSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XG4gICAgICAgIH0pOyBcbiAgfVxuXG4gIGFkZEdyb3VwKGdyb3VwOiBzdHJpbmcsIGRlc2NyaXB0aW9uOnN0cmluZywgZG9tYWlubmFtZTpzdHJpbmcsIHByaXZhY3k6c3RyaW5nLCBhZG1pbnM6c3RyaW5nLCBtZW1iZXJzOnN0cmluZykge1xuICAgIHJldHVybiBmaXJlYmFzZS5wdXNoKFxuICAgICAgICBcIi9Hcm91cHNcIixcbiAgICAgICAgeyBcIm5hbWVcIjogZ3JvdXAsIFwiZGVzY3JpcHRpb25cIjogZGVzY3JpcHRpb24sIFwiZG9tYWlubmFtZVwiOiBkb21haW5uYW1lLCBcInByaXZhY3lcIjogcHJpdmFjeSwgXCJhZG1pbnNcIjogYWRtaW5zLCBcIm1lbWJlcnNcIjogbWVtYmVycywgXCJkYXRlSW5NaWxsaXNlY29uZHNcIjogMCAtIERhdGUubm93KCl9XG4gICAgICApLnRoZW4oXG4gICAgICAgIGZ1bmN0aW9uIChyZXN1bHQ6YW55KSB7XG4gICAgICAgICAgcmV0dXJuICdHcm91cCBhZGRlZCAtIHlvdSBhcmUgYWRtaW4gb2YgdGhlIGdyb3VwISc7XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2U6YW55KSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgfSk7XG4gIH1cblxuXG5cbiAgYWRkTmV3VXNlcihlbWFpbDogc3RyaW5nLCB1c2VyVUlEOnN0cmluZywgZk5hbWU6c3RyaW5nLCBsTmFtZTpzdHJpbmcsIGRvYjpudW1iZXIsIGdlbmRlcjpzdHJpbmcsIHdlaWdodDpzdHJpbmcsIGdvYWxXZWlnaHQ6c3RyaW5nLCBmYXZBY3Rpdml0eTpzdHJpbmcpIHtcbiAgICByZXR1cm4gZmlyZWJhc2UucHVzaChcbiAgICAgICAgXCIvVXNlcnNcIixcbiAgICAgICAgeyBcImVtYWlsXCI6IGVtYWlsLCBcInVzZXJVSURcIjogdXNlclVJRCwgXCJmTmFtZVwiOiBmTmFtZSwgXCJsTmFtZVwiOiBsTmFtZSwgXCJkb2JcIjogZG9iLCBcImdlbmRlclwiOiBnZW5kZXIsIFwid2VpZ2h0XCI6IHdlaWdodCwgXCJnb2FsV2VpZ2h0XCI6IGdvYWxXZWlnaHQsXCJmYXZBY3Rpdml0eVwiOiBmYXZBY3Rpdml0eSB9XG5cdCkudGhlbihcbiAgICAgICAgZnVuY3Rpb24gKHJlc3VsdDphbnkpIHtcbiAgICAgICAgICByZXR1cm4gJ1VzZXIgYWRkZWQyJztcbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZTphbnkpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xuICAgICAgICB9KTtcbiAgfVxuXG4gIGVkaXRHaWZ0KGlkOnN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZywgaW1hZ2VwYXRoOiBzdHJpbmcpe1xuICAgIHRoaXMucHVibGlzaFVwZGF0ZXMoKTtcbiAgICByZXR1cm4gZmlyZWJhc2UudXBkYXRlKFwiL0dpZnRzL1wiK2lkK1wiXCIse1xuICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sIFxuICAgICAgICBpbWFnZXBhdGg6IGltYWdlcGF0aH0pXG4gICAgICAudGhlbihcbiAgICAgICAgZnVuY3Rpb24gKHJlc3VsdDphbnkpIHtcbiAgICAgICAgICByZXR1cm4gJ1lvdSBoYXZlIHN1Y2Nlc3NmdWxseSBlZGl0ZWQgdGhpcyBnaWZ0ISc7XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2U6YW55KSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgfSk7ICBcbiAgfVxuICBlZGl0RGVzY3JpcHRpb24oaWQ6c3RyaW5nLCBkZXNjcmlwdGlvbjogc3RyaW5nKXtcbiAgICB0aGlzLnB1Ymxpc2hVcGRhdGVzKCk7XG4gICAgcmV0dXJuIGZpcmViYXNlLnVwZGF0ZShcIi9HaWZ0cy9cIitpZCtcIlwiLHtcbiAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9ufSlcbiAgICAgIC50aGVuKFxuICAgICAgICBmdW5jdGlvbiAocmVzdWx0OmFueSkge1xuICAgICAgICAgIHJldHVybiAnWW91IGhhdmUgc3VjY2Vzc2Z1bGx5IGVkaXRlZCB0aGUgZGVzY3JpcHRpb24hJztcbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZTphbnkpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xuICAgICAgICB9KTsgIFxuICB9XG4gIGRlbGV0ZShnaWZ0OiBHaWZ0KSB7XG4gICAgcmV0dXJuIGZpcmViYXNlLnJlbW92ZShcIi9HaWZ0cy9cIitnaWZ0LmlkK1wiXCIpXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xuICB9XG4gIFxuICB1cGxvYWRGaWxlKGxvY2FsUGF0aDogc3RyaW5nLCBmaWxlPzogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICAgIGxldCBmaWxlbmFtZSA9IHRoaXMudXRpbHMuZ2V0RmlsZW5hbWUobG9jYWxQYXRoKTtcbiAgICAgIGxldCByZW1vdGVQYXRoID0gYCR7ZmlsZW5hbWV9YDsgICBcbiAgICAgIHJldHVybiBmaXJlYmFzZS51cGxvYWRGaWxlKHtcbiAgICAgICAgcmVtb3RlRnVsbFBhdGg6IHJlbW90ZVBhdGgsXG4gICAgICAgIGxvY2FsRnVsbFBhdGg6IGxvY2FsUGF0aCxcbiAgICAgICAgb25Qcm9ncmVzczogZnVuY3Rpb24oc3RhdHVzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVwbG9hZGVkIGZyYWN0aW9uOiBcIiArIHN0YXR1cy5mcmFjdGlvbkNvbXBsZXRlZCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBlcmNlbnRhZ2UgY29tcGxldGU6IFwiICsgc3RhdHVzLnBlcmNlbnRhZ2VDb21wbGV0ZWQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIGdldERvd25sb2FkVXJsKHJlbW90ZUZpbGVQYXRoOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgICAgcmV0dXJuIGZpcmViYXNlLmdldERvd25sb2FkVXJsKHtcbiAgICAgICAgcmVtb3RlRnVsbFBhdGg6IHJlbW90ZUZpbGVQYXRofSlcbiAgICAgIC50aGVuKFxuICAgICAgICBmdW5jdGlvbiAodXJsOnN0cmluZykge1xuICAgICAgICAgIHJldHVybiB1cmw7XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2U6YW55KSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgfSk7XG59XG5cbiAgaGFuZGxlRXJyb3JzKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IubWVzc2FnZSk7XG4gIH1cbn1cbiJdfQ==