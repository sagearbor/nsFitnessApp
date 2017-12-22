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
            email: user.email,
            password: user.password
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
    FirebaseService.prototype.addGroup = function (group, description, domainname, privacy, admins) {
        return firebase.push("/Groups", { "name": group, "description": description, "domainname": domainname, "privacy": privacy, "admins": admins, "date": 0 - Date.now() }).then(function (result) {
            return 'Group added - you are admin of the group!';
        }, function (errorMessage) {
            console.log(errorMessage);
        });
    };
    FirebaseService.prototype.addNewUser = function (email, userUID, fName, lName, dob, gender, weight, goalWeight, favActivity) {
        return firebase.push("/Users", { "email": email, "userUID": userUID, "fName": fName, "lName": lName, "dob": dob, "gender": gender, "weight": weight, "goalWeight": goalWeight, "favActivity": favActivity }).then(function (result) {
            return 'User added';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpcmViYXNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUQ7QUFFakQscURBQW1EO0FBQ25ELHVEQUEwRDtBQUMxRCw4Q0FBMkM7QUFDM0Msd0RBQXFEO0FBQ3JELGlEQUE2QztBQUM3QyxtQ0FBaUM7QUFHakMsSUFBYSxlQUFlO0lBQzFCLHlCQUNVLE1BQWMsRUFDZCxLQUFtQjtRQURuQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsVUFBSyxHQUFMLEtBQUssQ0FBYztRQUc3QixVQUFLLEdBQWlDLElBQUksaUNBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUV0RCxjQUFTLEdBQWdCLEVBQUUsQ0FBQztJQUpsQyxDQUFDO0lBTUgsa0NBQVEsR0FBUixVQUFTLElBQVU7UUFDakIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7WUFDekIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtTQUN4QixDQUFDLENBQUMsSUFBSSxDQUNELFVBQVUsTUFBVTtZQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoQyxDQUFDLEVBQ0QsVUFBVSxZQUFnQjtZQUN4QixLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDdEIsQ0FBQyxDQUNKLENBQUE7SUFDTCxDQUFDO0lBRUQsK0JBQUssR0FBTCxVQUFNLElBQVU7UUFDZCxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNwQixJQUFJLEVBQUUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRO1lBQ2pDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDeEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQVc7WUFDZCxnQ0FBYyxD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bmplY3RhYmxlLCBOZ1pvbmV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1VzZXIsIEdpZnQsIEdyb3VwfSBmcm9tIFwiLi4vbW9kZWxzXCI7XG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuL2JhY2tlbmQuc2VydmljZVwiO1xuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdH0gZnJvbSAncnhqcy9CZWhhdmlvclN1YmplY3QnO1xuaW1wb3J0IHtVdGlsc1NlcnZpY2V9IGZyb20gJy4vdXRpbHMuc2VydmljZSc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3NoYXJlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpcmViYXNlU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSB1dGlsczogVXRpbHNTZXJ2aWNlXG4gICl7fVxuICAgIFxuICBpdGVtczogQmVoYXZpb3JTdWJqZWN0PEFycmF5PEdpZnQ+PiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuICBcbiAgcHJpdmF0ZSBfYWxsSXRlbXM6IEFycmF5PEdpZnQ+ID0gW107XG4gIFxuICByZWdpc3Rlcih1c2VyOiBVc2VyKSB7XG4gICAgcmV0dXJuIGZpcmViYXNlLmNyZWF0ZVVzZXIoe1xuICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICBwYXNzd29yZDogdXNlci5wYXNzd29yZFxuICAgIH0pLnRoZW4oXG4gICAgICAgICAgZnVuY3Rpb24gKHJlc3VsdDphbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShyZXN1bHQpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZTphbnkpIHtcbiAgICAgICAgICAgIGFsZXJ0KGVycm9yTWVzc2FnZSk7XG4gICAgICAgICAgfVxuICAgICAgKVxuICB9XG5cbiAgbG9naW4odXNlcjogVXNlcikge1xuICAgIHJldHVybiBmaXJlYmFzZS5sb2dpbih7XG4gICAgICB0eXBlOiBmaXJlYmFzZS5Mb2dpblR5cGUuUEFTU1dPUkQsXG4gICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkXG4gICAgfSkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICAgICBCYWNrZW5kU2VydmljZS50b2tlbiA9IHJlc3VsdC51aWQ7XG4gICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XG4gICAgICB9LCAoZXJyb3JNZXNzYWdlOiBhbnkpID0+IHtcbiAgICAgICAgYWxlcnQoZXJyb3JNZXNzYWdlKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgbG9nb3V0KCl7XG4gICAgQmFja2VuZFNlcnZpY2UudG9rZW4gPSBcIlwiO1xuICAgIGZpcmViYXNlLmxvZ291dCgpOyAgICBcbiAgfVxuICBcbiAgcmVzZXRQYXNzd29yZChlbWFpbCkge1xuICAgIHJldHVybiBmaXJlYmFzZS5yZXNldFBhc3N3b3JkKHtcbiAgICBlbWFpbDogZW1haWxcbiAgICB9KS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgICAgIGFsZXJ0KEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlOmFueSkge1xuICAgICAgICAgIGFsZXJ0KGVycm9yTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICApLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcbiAgfVxuXG4gIGdldE15V2lzaExpc3QoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBhbnkpID0+IHtcbiAgICAgIGxldCBwYXRoID0gJ0dpZnRzJztcbiAgICAgIFxuICAgICAgICBsZXQgb25WYWx1ZUV2ZW50ID0gKHNuYXBzaG90OiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHJlc3VsdHMgPSB0aGlzLmhhbmRsZVNuYXBzaG90KHNuYXBzaG90LnZhbHVlKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3VsdHMpKVxuICAgICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzdWx0cyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGZpcmViYXNlLmFkZFZhbHVlRXZlbnRMaXN0ZW5lcihvblZhbHVlRXZlbnQsIGAvJHtwYXRofWApO1xuICAgIH0pLnNoYXJlKCk7ICAgICAgICAgICAgICBcbiAgfVxuXG4gIGdldE15R3JvdXBMaXN0KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogYW55KSA9PiB7XG4gICAgICBsZXQgcGF0aCA9ICdHcm91cHMnO1xuXG4gICAgICAgIGxldCBvblZhbHVlRXZlbnQgPSAoc25hcHNob3Q6IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0cyA9IHRoaXMuaGFuZGxlU25hcHNob3Qoc25hcHNob3QudmFsdWUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzdWx0cykpXG4gICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXN1bHRzKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgZmlyZWJhc2UuYWRkVmFsdWVFdmVudExpc3RlbmVyKG9uVmFsdWVFdmVudCwgYC8ke3BhdGh9YCk7XG4gICAgfSkuc2hhcmUoKTtcbiAgfVxuXG5cbiAgZ2V0TXlHaWZ0KGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IGFueSkgPT4ge1xuICAgICAgb2JzZXJ2ZXIubmV4dCh0aGlzLl9hbGxJdGVtcy5maWx0ZXIocyA9PiBzLmlkID09PSBpZClbMF0pO1xuICAgIH0pLnNoYXJlKCk7XG4gIH1cblxuICBnZXRNeU1lc3NhZ2UoKTogT2JzZXJ2YWJsZTxhbnk+e1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6YW55KSA9PiB7XG4gICAgICBmaXJlYmFzZS5nZXRSZW1vdGVDb25maWcoe1xuICAgICAgZGV2ZWxvcGVyTW9kZTogZmFsc2UsIC8vIHBsYXkgd2l0aCB0aGlzIGJvb2xlYW4gdG8gZ2V0IG1vcmUgZnJlcXVlbnQgdXBkYXRlcyBkdXJpbmcgZGV2ZWxvcG1lbnRcbiAgICAgIGNhY2hlRXhwaXJhdGlvblNlY29uZHM6IDMwMCwgLy8gMTAgbWludXRlcywgZGVmYXVsdCBpcyAxMiBob3Vycy4uIHNldCB0byBhIGxvd2VyIHZhbHVlIGR1cmluZyBkZXZcbiAgICAgIHByb3BlcnRpZXM6IFt7XG4gICAgICBrZXk6IFwibWVzc2FnZVwiLFxuICAgICAgZGVmYXVsdDogXCJIYXBweSBIb2xpZGF5cyFcIlxuICAgIH1dXG4gIH0pLnRoZW4oXG4gICAgICAgIGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkZldGNoZWQgYXQgXCIgKyByZXN1bHQubGFzdEZldGNoICsgKHJlc3VsdC50aHJvdHRsZWQgPyBcIiAodGhyb3R0bGVkKVwiIDogXCJcIikpO1xuICAgICAgICAgIGZvciAobGV0IGVudHJ5IGluIHJlc3VsdC5wcm9wZXJ0aWVzKSBcbiAgICAgICAgICAgIHsgXG4gICAgICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzdWx0LnByb3BlcnRpZXNbZW50cnldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICk7XG4gIH0pLnNoYXJlKCk7XG59XG5cbiAgICBcblxuICBoYW5kbGVTbmFwc2hvdChkYXRhOiBhbnkpIHtcbiAgICAvL2VtcHR5IGFycmF5LCB0aGVuIHJlZmlsbCBhbmQgZmlsdGVyXG4gICAgdGhpcy5fYWxsSXRlbXMgPSBbXTtcbiAgICBpZiAoZGF0YSkge1xuICAgICAgZm9yIChsZXQgaWQgaW4gZGF0YSkgeyAgICAgICAgXG4gICAgICAgIGxldCByZXN1bHQgPSAoPGFueT5PYmplY3QpLmFzc2lnbih7aWQ6IGlkfSwgZGF0YVtpZF0pO1xuICAgICAgICBpZihCYWNrZW5kU2VydmljZS50b2tlbiA9PT0gcmVzdWx0LlVJRCl7XG4gICAgICAgICAgdGhpcy5fYWxsSXRlbXMucHVzaChyZXN1bHQpO1xuICAgICAgICB9ICAgICAgICBcbiAgICAgIH1cbiAgICAgIHRoaXMucHVibGlzaFVwZGF0ZXMoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2FsbEl0ZW1zO1xuICB9XG5cbiAgIHB1Ymxpc2hVcGRhdGVzKCkge1xuICAgIC8vIGhlcmUsIHdlIHNvcnQgbXVzdCBlbWl0IGEgKm5ldyogdmFsdWUgKGltbXV0YWJpbGl0eSEpXG4gICAgdGhpcy5fYWxsSXRlbXMuc29ydChmdW5jdGlvbihhLCBiKXtcbiAgICAgICAgaWYoYS5kYXRlIDwgYi5kYXRlKSByZXR1cm4gLTE7XG4gICAgICAgIGlmKGEuZGF0ZSA+IGIuZGF0ZSkgcmV0dXJuIDE7XG4gICAgICByZXR1cm4gMDtcbiAgICB9KVxuICAgIHRoaXMuaXRlbXMubmV4dChbLi4udGhpcy5fYWxsSXRlbXNdKTtcbiAgfVxuXG4gIGFkZChnaWZ0OiBzdHJpbmcpIHsgICBcbiAgICByZXR1cm4gZmlyZWJhc2UucHVzaChcbiAgICAgICAgXCIvR2lmdHNcIixcbiAgICAgICAgeyBcIm5hbWVcIjogZ2lmdCwgXCJVSURcIjogQmFja2VuZFNlcnZpY2UudG9rZW4sIFwiZGF0ZVwiOiAwIC0gRGF0ZS5ub3coKSwgXCJpbWFnZXBhdGhcIjogXCJcIn1cbiAgICAgICkudGhlbihcbiAgICAgICAgZnVuY3Rpb24gKHJlc3VsdDphbnkpIHtcbiAgICAgICAgICByZXR1cm4gJ0dpZnQgYWRkZWQgdG8geW91ciB3aXNobGlzdCEnO1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlOmFueSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XG4gICAgICAgIH0pOyBcbiAgfVxuXG4gIGFkZEdyb3VwKGdyb3VwOiBzdHJpbmcsIGRlc2NyaXB0aW9uOnN0cmluZywgZG9tYWlubmFtZTpzdHJpbmcsIHByaXZhY3k6c3RyaW5nLCBhZG1pbnM6c3RyaW5nKSB7XG4gICAgcmV0dXJuIGZpcmViYXNlLnB1c2goXG4gICAgICAgIFwiL0dyb3Vwc1wiLFxuICAgICAgICB7IFwibmFtZVwiOiBncm91cCwgXCJkZXNjcmlwdGlvblwiOiBkZXNjcmlwdGlvbiwgXCJkb21haW5uYW1lXCI6IGRvbWFpbm5hbWUsIFwicHJpdmFjeVwiOiBwcml2YWN5LCBcImFkbWluc1wiOiBhZG1pbnMsIFwiZGF0ZVwiOiAwIC0gRGF0ZS5ub3coKX1cbiAgICAgICkudGhlbihcbiAgICAgICAgZnVuY3Rpb24gKHJlc3VsdDphbnkpIHtcbiAgICAgICAgICByZXR1cm4gJ0dyb3VwIGFkZGVkIC0geW91IGFyZSBhZG1pbiBvZiB0aGUgZ3JvdXAhJztcbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZTphbnkpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xuICAgICAgICB9KTtcbiAgfVxuXG5cblxuICBhZGROZXdVc2VyKGVtYWlsOiBzdHJpbmcsIHVzZXJVSUQ6c3RyaW5nLCBmTmFtZTpzdHJpbmcsIGxOYW1lOnN0cmluZywgZG9iOm51bWJlciwgZ2VuZGVyOnN0cmluZywgd2VpZ2h0OnN0cmluZywgZ29hbFdlaWdodDpzdHJpbmcsIGZhdkFjdGl2aXR5OnN0cmluZykge1xuICAgIHJldHVybiBmaXJlYmFzZS5wdXNoKFxuICAgICAgICBcIi9Vc2Vyc1wiLFxuICAgICAgICB7IFwiZW1haWxcIjogZW1haWwsIFwidXNlclVJRFwiOiB1c2VyVUlELCBcImZOYW1lXCI6IGZOYW1lLCBcImxOYW1lXCI6IGxOYW1lLCBcImRvYlwiOiBkb2IsIFwiZ2VuZGVyXCI6IGdlbmRlciwgXCJ3ZWlnaHRcIjogd2VpZ2h0LCBcImdvYWxXZWlnaHRcIjogZ29hbFdlaWdodCxcImZhdkFjdGl2aXR5XCI6IGZhdkFjdGl2aXR5IH1cbiAgICAgICAgKS50aGVuKFxuICAgICAgICBmdW5jdGlvbiAocmVzdWx0OmFueSkge1xuICAgICAgICAgIHJldHVybiAnVXNlciBhZGRlZCc7XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2U6YW55KSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgfSk7XG4gIH1cblxuICBlZGl0R2lmdChpZDpzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcsIGltYWdlcGF0aDogc3RyaW5nKXtcbiAgICB0aGlzLnB1Ymxpc2hVcGRhdGVzKCk7XG4gICAgcmV0dXJuIGZpcmViYXNlLnVwZGF0ZShcIi9HaWZ0cy9cIitpZCtcIlwiLHtcbiAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLCBcbiAgICAgICAgaW1hZ2VwYXRoOiBpbWFnZXBhdGh9KVxuICAgICAgLnRoZW4oXG4gICAgICAgIGZ1bmN0aW9uIChyZXN1bHQ6YW55KSB7XG4gICAgICAgICAgcmV0dXJuICdZb3UgaGF2ZSBzdWNjZXNzZnVsbHkgZWRpdGVkIHRoaXMgZ2lmdCEnO1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlOmFueSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XG4gICAgICAgIH0pOyAgXG4gIH1cbiAgZWRpdERlc2NyaXB0aW9uKGlkOnN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZyl7XG4gICAgdGhpcy5wdWJsaXNoVXBkYXRlcygpO1xuICAgIHJldHVybiBmaXJlYmFzZS51cGRhdGUoXCIvR2lmdHMvXCIraWQrXCJcIix7XG4gICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbn0pXG4gICAgICAudGhlbihcbiAgICAgICAgZnVuY3Rpb24gKHJlc3VsdDphbnkpIHtcbiAgICAgICAgICByZXR1cm4gJ1lvdSBoYXZlIHN1Y2Nlc3NmdWxseSBlZGl0ZWQgdGhlIGRlc2NyaXB0aW9uISc7XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2U6YW55KSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgfSk7ICBcbiAgfVxuICBkZWxldGUoZ2lmdDogR2lmdCkge1xuICAgIHJldHVybiBmaXJlYmFzZS5yZW1vdmUoXCIvR2lmdHMvXCIrZ2lmdC5pZCtcIlwiKVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcbiAgfVxuICBcbiAgdXBsb2FkRmlsZShsb2NhbFBhdGg6IHN0cmluZywgZmlsZT86IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgICBsZXQgZmlsZW5hbWUgPSB0aGlzLnV0aWxzLmdldEZpbGVuYW1lKGxvY2FsUGF0aCk7XG4gICAgICBsZXQgcmVtb3RlUGF0aCA9IGAke2ZpbGVuYW1lfWA7ICAgXG4gICAgICByZXR1cm4gZmlyZWJhc2UudXBsb2FkRmlsZSh7XG4gICAgICAgIHJlbW90ZUZ1bGxQYXRoOiByZW1vdGVQYXRoLFxuICAgICAgICBsb2NhbEZ1bGxQYXRoOiBsb2NhbFBhdGgsXG4gICAgICAgIG9uUHJvZ3Jlc3M6IGZ1bmN0aW9uKHN0YXR1cykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJVcGxvYWRlZCBmcmFjdGlvbjogXCIgKyBzdGF0dXMuZnJhY3Rpb25Db21wbGV0ZWQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQZXJjZW50YWdlIGNvbXBsZXRlOiBcIiArIHN0YXR1cy5wZXJjZW50YWdlQ29tcGxldGVkKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBnZXREb3dubG9hZFVybChyZW1vdGVGaWxlUGF0aDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgIHJldHVybiBmaXJlYmFzZS5nZXREb3dubG9hZFVybCh7XG4gICAgICAgIHJlbW90ZUZ1bGxQYXRoOiByZW1vdGVGaWxlUGF0aH0pXG4gICAgICAudGhlbihcbiAgICAgICAgZnVuY3Rpb24gKHVybDpzdHJpbmcpIHtcbiAgICAgICAgICByZXR1cm4gdXJsO1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlOmFueSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XG4gICAgICAgIH0pO1xufVxuXG4gIGhhbmRsZUVycm9ycyhlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yLm1lc3NhZ2UpO1xuICB9XG59XG4iXX0=