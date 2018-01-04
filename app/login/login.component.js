"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var models_1 = require("../models");
var services_1 = require("../services");
var dialogs_1 = require("ui/dialogs");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var backend_service_1 = require("../services/backend.service");
var LoginComponent = (function () {
    function LoginComponent(firebaseService, routerExtensions) {
        this.firebaseService = firebaseService;
        this.routerExtensions = routerExtensions;
        this.isLoggingIn = true;
        this.isAuthenticating = false;
        this.user = new models_1.User();
        this.user.email = "sagearbor+ALguest@sagearbor.com";
        this.user.password = "Password";
    }
    LoginComponent.prototype.submit = function () {
        this.isAuthenticating = true;
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.firebaseService.login(this.user)
            .then(function () {
            _this.isAuthenticating = false;
            _this.routerExtensions.navigate(["/"], { clearHistory: true });
        })
            .catch(function (message) {
            _this.isAuthenticating = false;
        });
    };
    LoginComponent.prototype.signUp = function () {
        var _this = this;
        this.firebaseService.register(this.user)
            .then(function () {
            _this.isAuthenticating = false;
            _this.toggleDisplay();
        })
            .catch(function (message) {
            alert(message);
            _this.isAuthenticating = false;
        });
        var newUser = { email: this.user.email, userUID: backend_service_1.BackendService.token, fName: this.user.fName, lName: this.user.lName, dob: Date.now(), gender: this.user.gender, weight: this.user.weight, goalWeight: this.user.goalWeight, favActivity: this.user.favActivity };
        this.firebaseService.addNewUser(newUser.email, newUser.userUID, newUser.fName, newUser.lName, newUser.dob, newUser.gender, newUser.weight, newUser.goalWeight, newUser.favActivity).then(function (message) {
            alert(message);
        });
    };
    LoginComponent.prototype.forgotPassword = function () {
        var _this = this;
        dialogs_1.prompt({
            title: "Forgot Password",
            message: "Enter the email address you used to register for ArborLife to reset your password.",
            defaultText: "",
            okButtonText: "Ok",
            cancelButtonText: "Cancel"
        }).then(function (data) {
            if (data.result) {
                _this.firebaseService.resetPassword(data.text.trim())
                    .then(function (result) {
                    if (result) {
                        alert(result);
                    }
                });
            }
        });
    };
    LoginComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'al-login',
        templateUrl: 'login.html'
    }),
    __metadata("design:paramtypes", [services_1.FirebaseService,
        router_extensions_1.RouterExtensions])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdDO0FBRXhDLG9DQUE0QztBQUM1Qyx3Q0FBNEM7QUFDNUMsc0NBQWtDO0FBQ2xDLG1GQUFpRjtBQUNqRiwrREFBNkQ7QUFTN0QsSUFBYSxjQUFjO0lBZ0J6Qix3QkFBb0IsZUFBZ0MsRUFDaEMsZ0JBQWtDO1FBRGxDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBaEJ0RCxnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFpQmIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGFBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLGlDQUFpQyxDQUFDO1FBQzNELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztJQUMzQixDQUFDO0lBRVosK0JBQU0sR0FBTjtRQUNHLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDN0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hCLENBQUM7SUFDSCxDQUFDO0lBRUQsOEJBQUssR0FBTDtRQUFBLGlCQVVDO1FBVEUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNuQyxJQUFJLENBQUM7WUFDSixLQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1lBQzlCLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FB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LEVBQUUsVUFBVTtRQUNwQixXQUFXLEVBQUUsWUFBWTtLQUMxQixDQUFDO3FDQWtCcUMsMEJBQWU7UUFDZCxvQ0FBZ0I7R0FqQjNDLGNBQWMsQ0FzRjFCO0FBdEZZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHtVc2VyLCBHaWZ0LCBHcm91cH0gZnJvbSBcIi4uL21vZGVsc1wiO1xuaW1wb3J0IHtGaXJlYmFzZVNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2VzJztcbmltcG9ydCB7cHJvbXB0fSBmcm9tIFwidWkvZGlhbG9nc1wiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlci9yb3V0ZXItZXh0ZW5zaW9ucyc7XG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9iYWNrZW5kLnNlcnZpY2VcIjtcbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhbC1sb2dpbicsXG4gIHRlbXBsYXRlVXJsOiAnbG9naW4uaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XG4gIGlzTG9nZ2luZ0luID0gdHJ1ZTtcbiAgaXNBdXRoZW50aWNhdGluZyA9IGZhbHNlO1xuICB1c2VyVUlEOiBzdHJpbmc7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG4gIGZOYW1lOiBzdHJpbmc7XG4gIGxOYW1lOiBzdHJpbmc7XG4gIGRvYjogbnVtYmVyO1xuICBnZW5kZXI6IHN0cmluZztcbiAgd2VpZ2h0OiBzdHJpbmc7XG4gIGdvYWxXZWlnaHQ6IHN0cmluZztcbiAgZmF2QWN0aXZpdHk6IHN0cmluZztcblxuICB1c2VyOiBVc2VyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmlyZWJhc2VTZXJ2aWNlOiBGaXJlYmFzZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9uc1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XG4gICAgICAgICAgICAgIHRoaXMudXNlci5lbWFpbCA9IFwic2FnZWFyYm9yK0FMZ3Vlc3RAc2FnZWFyYm9yLmNvbVwiO1xuXHQgICAgICB0aGlzLnVzZXIucGFzc3dvcmQgPSBcIlBhc3N3b3JkXCI7XG4gICAgICAgICAgICB9XG4gXG4gc3VibWl0KCkge1xuICAgIHRoaXMuaXNBdXRoZW50aWNhdGluZyA9IHRydWU7XG4gICAgaWYgKHRoaXMuaXNMb2dnaW5nSW4pIHtcbiAgICAgIHRoaXMubG9naW4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaWduVXAoKTtcbiAgICB9XG4gIH1cblxuICBsb2dpbigpIHtcbiAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2UubG9naW4odGhpcy51c2VyKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9cIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0gKTtcblxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgobWVzc2FnZTphbnkpID0+IHtcbiAgICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XG4gICAgICB9KTtcbiAgfVxuXG4gIHNpZ25VcCgpIHtcbiAgXG4gICAgdGhpcy5maXJlYmFzZVNlcnZpY2UucmVnaXN0ZXIodGhpcy51c2VyKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50b2dnbGVEaXNwbGF5KCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChtZXNzYWdlOmFueSkgPT4ge1xuICAgICAgICBhbGVydChtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XG5cdH0pO1xuXG4gICAgICAgIGxldCBuZXdVc2VyID0ge2VtYWlsOiB0aGlzLnVzZXIuZW1haWwgLCB1c2VyVUlEOiBCYWNrZW5kU2VydmljZS50b2tlbiAsIGZOYW1lOiB0aGlzLnVzZXIuZk5hbWUgLCBsTmFtZTogdGhpcy51c2VyLmxOYW1lICwgZG9iOiBEYXRlLm5vdygpICwgZ2VuZGVyOiB0aGlzLnVzZXIuZ2VuZGVyICwgd2VpZ2h0OiB0aGlzLnVzZXIud2VpZ2h0ICwgZ29hbFdlaWdodDogdGhpcy51c2VyLmdvYWxXZWlnaHQgLCBmYXZBY3Rpdml0eTogdGhpcy51c2VyLmZhdkFjdGl2aXR5IH07XG5cbiAgICB0aGlzLmZpcmViYXNlU2VydmljZS5hZGROZXdVc2VyKG5ld1VzZXIuZW1haWwsbmV3VXNlci51c2VyVUlELG5ld1VzZXIuZk5hbWUsbmV3VXNlci5sTmFtZSxuZXdVc2VyLmRvYixuZXdVc2VyLmdlbmRlcixuZXdVc2VyLndlaWdodCxuZXdVc2VyLmdvYWxXZWlnaHQsbmV3VXNlci5mYXZBY3Rpdml0eSkudGhlbigobWVzc2FnZTphbnkpID0+IHtcbiAgICAgIGFsZXJ0KG1lc3NhZ2UpO1xuICAgIH0pXG4gIH1cbiBcbiAgZm9yZ290UGFzc3dvcmQoKSB7XG4gICAgcHJvbXB0KHtcbiAgICAgIHRpdGxlOiBcIkZvcmdvdCBQYXNzd29yZFwiLFxuICAgICAgbWVzc2FnZTogXCJFbnRlciB0aGUgZW1haWwgYWRkcmVzcyB5b3UgdXNlZCB0byByZWdpc3RlciBmb3IgQXJib3JMaWZlIHRvIHJlc2V0IHlvdXIgcGFzc3dvcmQuXCIsXG4gICAgICBkZWZhdWx0VGV4dDogXCJcIixcbiAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiLFxuICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIlxuICAgIH0pLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChkYXRhLnJlc3VsdCkge1xuICAgICAgICB0aGlzLmZpcmViYXNlU2VydmljZS5yZXNldFBhc3N3b3JkKGRhdGEudGV4dC50cmltKCkpXG4gICAgICAgICAgLnRoZW4oKHJlc3VsdDphbnkpID0+IHtcbiAgICAgICAgICAgIGlmKHJlc3VsdCl7XG4gICAgICAgICAgICAgIGFsZXJ0KHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBcbnRvZ2dsZURpc3BsYXkoKSB7XG4gICAgdGhpcy5pc0xvZ2dpbmdJbiA9ICF0aGlzLmlzTG9nZ2luZ0luO1xuICB9XG59XG4iXX0=