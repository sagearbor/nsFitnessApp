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
        return firebase.push("/Groups", { "name": group, "description": description, "domainname": domainname, "privacy": privacy, "admins": admins, "dateInMilliseconds": 0 - Date.now() }).then(function (result) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpcmViYXNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUQ7QUFFakQscURBQW1EO0FBQ25ELHVEQUEwRDtBQUMxRCw4Q0FBMkM7QUFDM0Msd0RBQXFEO0FBQ3JELGlEQUE2QztBQUM3QyxtQ0FBaUM7QUFHakMsSUFBYSxlQUFlO0lBQzFCLHlCQUNVLE1BQWMsRUFDZCxLQUFtQjtRQURuQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsVUFBSyxHQUFMLEtBQUssQ0FBYztRQUc3QixVQUFLLEdBQWlDLElBQUksaUNBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUV0RCxjQUFTLEdBQWdCLEVBQUUsQ0FBQztJQUpsQyxDQUFDO0lBTUgsa0NBQVEsR0FBUixVQUFTLElBQVU7UUFDakIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7WUFDekIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtTQUN4QixDQUFDLENBQUMsSUFBSSxDQUNELFVBQVUsTUFBVTtZQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoQyxDQUFDLEVBQ0QsVUFBVSxZQUFnQjtZQUN4QixLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDdEIsQ0FBQyxDQUNKLENBQUE7SUFDTCxDQUFDO0lBRUQsK0JBQUssR0FBTCxVQUFNLElBQVU7UUFDZCxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNwQixJQUFJLEVBQUUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRO1lBQ2pDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDeEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQVc7WUFDZCxnQ0FBYyxD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e0luamVjdGFibGUsIE5nWm9uZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7VXNlciwgR2lmdCwgR3JvdXB9IGZyb20gXCIuLi9tb2RlbHNcIjtcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSBcIi4vYmFja2VuZC5zZXJ2aWNlXCI7XG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0fSBmcm9tICdyeGpzL0JlaGF2aW9yU3ViamVjdCc7XG5pbXBvcnQge1V0aWxzU2VydmljZX0gZnJvbSAnLi91dGlscy5zZXJ2aWNlJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3Ivc2hhcmUnO1xuICAgXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmlyZWJhc2VTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIHV0aWxzOiBVdGlsc1NlcnZpY2VcbiAgKXt9XG4gICAgXG4gIGl0ZW1zOiBCZWhhdmlvclN1YmplY3Q8QXJyYXk8R2lmdD4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XG4gIFxuICBwcml2YXRlIF9hbGxJdGVtczogQXJyYXk8R2lmdD4gPSBbXTtcbiAgXG4gIHJlZ2lzdGVyKHVzZXI6IFVzZXIpIHtcbiAgICByZXR1cm4gZmlyZWJhc2UuY3JlYXRlVXNlcih7XG4gICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkXG4gICAgfSkudGhlbihcbiAgICAgICAgICBmdW5jdGlvbiAocmVzdWx0OmFueSkge1xuICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlOmFueSkge1xuICAgICAgICAgICAgYWxlcnQoZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgICB9XG4gICAgICApXG4gIH1cblxuICBsb2dpbih1c2VyOiBVc2VyKSB7XG4gICAgcmV0dXJuIGZpcmViYXNlLmxvZ2luKHtcbiAgICAgIHR5cGU6IGZpcmViYXNlLkxvZ2luVHlwZS5QQVNTV09SRCxcbiAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmRcbiAgICB9KS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgICAgIEJhY2tlbmRTZXJ2aWNlLnRva2VuID0gcmVzdWx0LnVpZDtcbiAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkocmVzdWx0KTtcbiAgICAgIH0sIChlcnJvck1lc3NhZ2U6IGFueSkgPT4ge1xuICAgICAgICBhbGVydChlcnJvck1lc3NhZ2UpO1xuICAgICAgfSk7XG4gIH1cblxuICBsb2dvdXQoKXtcbiAgICBCYWNrZW5kU2VydmljZS50b2tlbiA9IFwiXCI7XG4gICAgZmlyZWJhc2UubG9nb3V0KCk7ICAgIFxuICB9XG4gIFxuICByZXNldFBhc3N3b3JkKGVtYWlsKSB7XG4gICAgcmV0dXJuIGZpcmViYXNlLnJlc2V0UGFzc3dvcmQoe1xuICAgIGVtYWlsOiBlbWFpbFxuICAgIH0pLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAgICAgYWxlcnQoSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2U6YW55KSB7XG4gICAgICAgICAgYWxlcnQoZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICkuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xuICB9XG5cbiAgZ2V0TXlXaXNoTGlzdCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IGFueSkgPT4ge1xuICAgICAgbGV0IHBhdGggPSAnR2lmdHMnO1xuICAgICAgXG4gICAgICAgIGxldCBvblZhbHVlRXZlbnQgPSAoc25hcHNob3Q6IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0cyA9IHRoaXMuaGFuZGxlU25hcHNob3Qoc25hcHNob3QudmFsdWUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzdWx0cykpXG4gICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXN1bHRzKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgZmlyZWJhc2UuYWRkVmFsdWVFdmVudExpc3RlbmVyKG9uVmFsdWVFdmVudCwgYC8ke3BhdGh9YCk7XG4gICAgfSkuc2hhcmUoKTsgICAgICAgICAgICAgIFxuICB9XG5cbiAgZ2V0TXlHcm91cExpc3QoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBhbnkpID0+IHtcbiAgICAgIGxldCBwYXRoID0gJ0dyb3Vwcyc7XG5cbiAgICAgICAgbGV0IG9uVmFsdWVFdmVudCA9IChzbmFwc2hvdDogYW55KSA9PiB7XG4gICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgIGxldCByZXN1bHRzID0gdGhpcy5oYW5kbGVTbmFwc2hvdChzbmFwc2hvdC52YWx1ZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXN1bHRzKSlcbiAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3VsdHMpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBmaXJlYmFzZS5hZGRWYWx1ZUV2ZW50TGlzdGVuZXIob25WYWx1ZUV2ZW50LCBgLyR7cGF0aH1gKTtcbiAgICB9KS5zaGFyZSgpO1xuICB9XG5cblxuICBnZXRNeUdpZnQoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogYW55KSA9PiB7XG4gICAgICBvYnNlcnZlci5uZXh0KHRoaXMuX2FsbEl0ZW1zLmZpbHRlcihzID0+IHMuaWQgPT09IGlkKVswXSk7XG4gICAgfSkuc2hhcmUoKTtcbiAgfVxuXG4gIGdldE15TWVzc2FnZSgpOiBPYnNlcnZhYmxlPGFueT57XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjphbnkpID0+IHtcbiAgICAgIGZpcmViYXNlLmdldFJlbW90ZUNvbmZpZyh7XG4gICAgICBkZXZlbG9wZXJNb2RlOiBmYWxzZSwgLy8gcGxheSB3aXRoIHRoaXMgYm9vbGVhbiB0byBnZXQgbW9yZSBmcmVxdWVudCB1cGRhdGVzIGR1cmluZyBkZXZlbG9wbWVudFxuICAgICAgY2FjaGVFeHBpcmF0aW9uU2Vjb25kczogMzAwLCAvLyAxMCBtaW51dGVzLCBkZWZhdWx0IGlzIDEyIGhvdXJzLi4gc2V0IHRvIGEgbG93ZXIgdmFsdWUgZHVyaW5nIGRldlxuICAgICAgcHJvcGVydGllczogW3tcbiAgICAgIGtleTogXCJtZXNzYWdlXCIsXG4gICAgICBkZWZhdWx0OiBcIkhhcHB5IEhvbGlkYXlzIVwiXG4gICAgfV1cbiAgfSkudGhlbihcbiAgICAgICAgZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmV0Y2hlZCBhdCBcIiArIHJlc3VsdC5sYXN0RmV0Y2ggKyAocmVzdWx0LnRocm90dGxlZCA/IFwiICh0aHJvdHRsZWQpXCIgOiBcIlwiKSk7XG4gICAgICAgICAgZm9yIChsZXQgZW50cnkgaW4gcmVzdWx0LnByb3BlcnRpZXMpIFxuICAgICAgICAgICAgeyBcbiAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXN1bHQucHJvcGVydGllc1tlbnRyeV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgKTtcbiAgfSkuc2hhcmUoKTtcbn1cblxuICAgIFxuXG4gIGhhbmRsZVNuYXBzaG90KGRhdGE6IGFueSkge1xuICAgIC8vZW1wdHkgYXJyYXksIHRoZW4gcmVmaWxsIGFuZCBmaWx0ZXJcbiAgICB0aGlzLl9hbGxJdGVtcyA9IFtdO1xuICAgIGlmIChkYXRhKSB7XG4gICAgICBmb3IgKGxldCBpZCBpbiBkYXRhKSB7ICAgICAgICBcbiAgICAgICAgbGV0IHJlc3VsdCA9ICg8YW55Pk9iamVjdCkuYXNzaWduKHtpZDogaWR9LCBkYXRhW2lkXSk7XG4gICAgICAgIGlmKEJhY2tlbmRTZXJ2aWNlLnRva2VuID09PSByZXN1bHQuVUlEKXtcbiAgICAgICAgICB0aGlzLl9hbGxJdGVtcy5wdXNoKHJlc3VsdCk7XG4gICAgICAgIH0gICAgICAgIFxuICAgICAgfVxuICAgICAgdGhpcy5wdWJsaXNoVXBkYXRlcygpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fYWxsSXRlbXM7XG4gIH1cblxuICAgcHVibGlzaFVwZGF0ZXMoKSB7XG4gICAgLy8gaGVyZSwgd2Ugc29ydCBtdXN0IGVtaXQgYSAqbmV3KiB2YWx1ZSAoaW1tdXRhYmlsaXR5ISlcbiAgICB0aGlzLl9hbGxJdGVtcy5zb3J0KGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgICBpZihhLmRhdGUgPCBiLmRhdGUpIHJldHVybiAtMTtcbiAgICAgICAgaWYoYS5kYXRlID4gYi5kYXRlKSByZXR1cm4gMTtcbiAgICAgIHJldHVybiAwO1xuICAgIH0pXG4gICAgdGhpcy5pdGVtcy5uZXh0KFsuLi50aGlzLl9hbGxJdGVtc10pO1xuICB9XG5cbiAgYWRkKGdpZnQ6IHN0cmluZykgeyAgIFxuICAgIHJldHVybiBmaXJlYmFzZS5wdXNoKFxuICAgICAgICBcIi9HaWZ0c1wiLFxuICAgICAgICB7IFwibmFtZVwiOiBnaWZ0LCBcIlVJRFwiOiBCYWNrZW5kU2VydmljZS50b2tlbiwgXCJkYXRlXCI6IDAgLSBEYXRlLm5vdygpLCBcImltYWdlcGF0aFwiOiBcIlwifVxuICAgICAgKS50aGVuKFxuICAgICAgICBmdW5jdGlvbiAocmVzdWx0OmFueSkge1xuICAgICAgICAgIHJldHVybiAnR2lmdCBhZGRlZCB0byB5b3VyIHdpc2hsaXN0ISc7XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2U6YW55KSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgfSk7IFxuICB9XG5cbiAgYWRkR3JvdXAoZ3JvdXA6IHN0cmluZywgZGVzY3JpcHRpb246c3RyaW5nLCBkb21haW5uYW1lOnN0cmluZywgcHJpdmFjeTpzdHJpbmcsIGFkbWluczpzdHJpbmcpIHtcbiAgICByZXR1cm4gZmlyZWJhc2UucHVzaChcbiAgICAgICAgXCIvR3JvdXBzXCIsXG4gICAgICAgIHsgXCJuYW1lXCI6IGdyb3VwLCBcImRlc2NyaXB0aW9uXCI6IGRlc2NyaXB0aW9uLCBcImRvbWFpbm5hbWVcIjogZG9tYWlubmFtZSwgXCJwcml2YWN5XCI6IHByaXZhY3ksIFwiYWRtaW5zXCI6IGFkbWlucywgXCJkYXRlSW5NaWxsaXNlY29uZHNcIjogMCAtIERhdGUubm93KCl9XG4gICAgICApLnRoZW4oXG4gICAgICAgIGZ1bmN0aW9uIChyZXN1bHQ6YW55KSB7XG4gICAgICAgICAgcmV0dXJuICdHcm91cCBhZGRlZCAtIHlvdSBhcmUgYWRtaW4gb2YgdGhlIGdyb3VwISc7XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2U6YW55KSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgfSk7XG4gIH1cblxuXG5cbiAgYWRkTmV3VXNlcihlbWFpbDogc3RyaW5nLCB1c2VyVUlEOnN0cmluZywgZk5hbWU6c3RyaW5nLCBsTmFtZTpzdHJpbmcsIGRvYjpudW1iZXIsIGdlbmRlcjpzdHJpbmcsIHdlaWdodDpzdHJpbmcsIGdvYWxXZWlnaHQ6c3RyaW5nLCBmYXZBY3Rpdml0eTpzdHJpbmcpIHtcbiAgICByZXR1cm4gZmlyZWJhc2UucHVzaChcbiAgICAgICAgXCIvVXNlcnNcIixcbiAgICAgICAgeyBcImVtYWlsXCI6IGVtYWlsLCBcInVzZXJVSURcIjogdXNlclVJRCwgXCJmTmFtZVwiOiBmTmFtZSwgXCJsTmFtZVwiOiBsTmFtZSwgXCJkb2JcIjogZG9iLCBcImdlbmRlclwiOiBnZW5kZXIsIFwid2VpZ2h0XCI6IHdlaWdodCwgXCJnb2FsV2VpZ2h0XCI6IGdvYWxXZWlnaHQsXCJmYXZBY3Rpdml0eVwiOiBmYXZBY3Rpdml0eSB9XG4gICAgICAgICkudGhlbihcbiAgICAgICAgZnVuY3Rpb24gKHJlc3VsdDphbnkpIHtcbiAgICAgICAgICByZXR1cm4gJ1VzZXIgYWRkZWQnO1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlOmFueSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XG4gICAgICAgIH0pO1xuICB9XG5cbiAgZWRpdEdpZnQoaWQ6c3RyaW5nLCBkZXNjcmlwdGlvbjogc3RyaW5nLCBpbWFnZXBhdGg6IHN0cmluZyl7XG4gICAgdGhpcy5wdWJsaXNoVXBkYXRlcygpO1xuICAgIHJldHVybiBmaXJlYmFzZS51cGRhdGUoXCIvR2lmdHMvXCIraWQrXCJcIix7XG4gICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbiwgXG4gICAgICAgIGltYWdlcGF0aDogaW1hZ2VwYXRofSlcbiAgICAgIC50aGVuKFxuICAgICAgICBmdW5jdGlvbiAocmVzdWx0OmFueSkge1xuICAgICAgICAgIHJldHVybiAnWW91IGhhdmUgc3VjY2Vzc2Z1bGx5IGVkaXRlZCB0aGlzIGdpZnQhJztcbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZTphbnkpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xuICAgICAgICB9KTsgIFxuICB9XG4gIGVkaXREZXNjcmlwdGlvbihpZDpzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcpe1xuICAgIHRoaXMucHVibGlzaFVwZGF0ZXMoKTtcbiAgICByZXR1cm4gZmlyZWJhc2UudXBkYXRlKFwiL0dpZnRzL1wiK2lkK1wiXCIse1xuICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb259KVxuICAgICAgLnRoZW4oXG4gICAgICAgIGZ1bmN0aW9uIChyZXN1bHQ6YW55KSB7XG4gICAgICAgICAgcmV0dXJuICdZb3UgaGF2ZSBzdWNjZXNzZnVsbHkgZWRpdGVkIHRoZSBkZXNjcmlwdGlvbiEnO1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlOmFueSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XG4gICAgICAgIH0pOyAgXG4gIH1cbiAgZGVsZXRlKGdpZnQ6IEdpZnQpIHtcbiAgICByZXR1cm4gZmlyZWJhc2UucmVtb3ZlKFwiL0dpZnRzL1wiK2dpZnQuaWQrXCJcIilcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XG4gIH1cbiAgXG4gIHVwbG9hZEZpbGUobG9jYWxQYXRoOiBzdHJpbmcsIGZpbGU/OiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgICAgbGV0IGZpbGVuYW1lID0gdGhpcy51dGlscy5nZXRGaWxlbmFtZShsb2NhbFBhdGgpO1xuICAgICAgbGV0IHJlbW90ZVBhdGggPSBgJHtmaWxlbmFtZX1gOyAgIFxuICAgICAgcmV0dXJuIGZpcmViYXNlLnVwbG9hZEZpbGUoe1xuICAgICAgICByZW1vdGVGdWxsUGF0aDogcmVtb3RlUGF0aCxcbiAgICAgICAgbG9jYWxGdWxsUGF0aDogbG9jYWxQYXRoLFxuICAgICAgICBvblByb2dyZXNzOiBmdW5jdGlvbihzdGF0dXMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXBsb2FkZWQgZnJhY3Rpb246IFwiICsgc3RhdHVzLmZyYWN0aW9uQ29tcGxldGVkKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGVyY2VudGFnZSBjb21wbGV0ZTogXCIgKyBzdGF0dXMucGVyY2VudGFnZUNvbXBsZXRlZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgZ2V0RG93bmxvYWRVcmwocmVtb3RlRmlsZVBhdGg6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgICByZXR1cm4gZmlyZWJhc2UuZ2V0RG93bmxvYWRVcmwoe1xuICAgICAgICByZW1vdGVGdWxsUGF0aDogcmVtb3RlRmlsZVBhdGh9KVxuICAgICAgLnRoZW4oXG4gICAgICAgIGZ1bmN0aW9uICh1cmw6c3RyaW5nKSB7XG4gICAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZTphbnkpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xuICAgICAgICB9KTtcbn1cblxuICBoYW5kbGVFcnJvcnMoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvcikpO1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvci5tZXNzYWdlKTtcbiAgfVxufVxuIl19