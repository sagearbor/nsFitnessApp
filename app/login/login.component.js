"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_model_1 = require("../models/user.model");
var services_1 = require("../services");
var dialogs_1 = require("ui/dialogs");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var LoginComponent = (function () {
    function LoginComponent(firebaseService, routerExtensions) {
        this.firebaseService = firebaseService;
        this.routerExtensions = routerExtensions;
        this.isLoggingIn = true;
        this.isAuthenticating = false;
        this.user = new user_model_1.User();
        this.user.email = "user@nativescript.org";
        this.user.password = "password";
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
    };
    LoginComponent.prototype.forgotPassword = function () {
        var _this = this;
        dialogs_1.prompt({
            title: "Forgot Password",
            message: "Enter the email address you used to register for Giftler to reset your password.",
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
        selector: 'gf-login',
        templateUrl: 'login.html'
    }),
    __metadata("design:paramtypes", [services_1.FirebaseService,
        router_extensions_1.RouterExtensions])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdDO0FBRXhDLG1EQUEwQztBQUMxQyx3Q0FBNEM7QUFDNUMsc0NBQWtDO0FBQ2xDLG1GQUFpRjtBQU9qRixJQUFhLGNBQWM7SUFNekIsd0JBQW9CLGVBQWdDLEVBQ2hDLGdCQUFrQztRQURsQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUx0RCxnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFNYixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksaUJBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLHVCQUF1QixDQUFDO1FBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztJQUNsQyxDQUFDO0lBR1osK0JBQU0sR0FBTjtRQUNHLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDN0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hCLENBQUM7SUFDSCxDQUFDO0lBRUQsOEJBQUssR0FBTDtRQUFBLGlCQVVDO1FBVEUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNuQyxJQUFJLENBQUM7WUFDSixLQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1lBQzlCLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBRSxDQUFDO1FBRWpFLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFDLE9BQVc7WUFDakIsS0FBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBQUEsaUJBVUM7UUFUQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ3JDLElBQUksQ0FBQztZQUNKLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7WUFDOUIsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFDLE9BQVc7WUFDakIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2YsS0FBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx1Q0FBYyxHQUFkO1FBQUEsaUJBa0JBO1FBaEJFLGdCQUFNLENBQUM7WUFDTCxLQUFLLEVBQUUsaUJBQWlCO1lBQ3hCLE9BQU8sRUFBRSxrRkFBa0Y7WUFDM0YsV0FBVyxFQUFFLEVBQUU7WUFDZixZQUFZLEVBQUUsSUFBSTtZQUNsQixnQkFBZ0IsRUFBRSxRQUFRO1NBQzNCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFJO1lBQ1gsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ2hCLEtBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7cUJBQ2pELElBQUksQ0FBQyxVQUFDLE1BQVU7b0JBQ2YsRUFBRSxDQUFBLENBQUMsTUFBTSxDQUFDLENBQUEsQ0FBQzt3QkFDVCxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ2hCLENBQUM7Z0JBQ0osQ0FBQyxDQUFDLENBQUM7WUFDTixDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDO0lBRUYsc0NBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3ZDLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUF2RUQsSUF1RUM7QUF2RVksY0FBYztJQUwxQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFdBQVcsRUFBRSxZQUFZO0tBQzFCLENBQUM7cUNBT3FDLDBCQUFlO1FBQ2Qsb0NBQWdCO0dBUDNDLGNBQWMsQ0F1RTFCO0FBdkVZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHtVc2VyfSBmcm9tICcuLi9tb2RlbHMvdXNlci5tb2RlbCc7XG5pbXBvcnQge0ZpcmViYXNlU2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMnO1xuaW1wb3J0IHtwcm9tcHR9IGZyb20gXCJ1aS9kaWFsb2dzXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyL3JvdXRlci1leHRlbnNpb25zJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnZ2YtbG9naW4nLFxuICB0ZW1wbGF0ZVVybDogJ2xvZ2luLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IHtcbiAgdXNlcjogVXNlcjtcbiAgaXNMb2dnaW5nSW4gPSB0cnVlO1xuICBpc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XG5cbiAgXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmlyZWJhc2VTZXJ2aWNlOiBGaXJlYmFzZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9uc1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XG4gICAgICAgICAgICAgIHRoaXMudXNlci5lbWFpbCA9IFwidXNlckBuYXRpdmVzY3JpcHQub3JnXCI7XG4gICAgICAgICAgICAgIHRoaXMudXNlci5wYXNzd29yZCA9IFwicGFzc3dvcmRcIjtcbiAgICAgICAgICAgIH1cblxuIFxuIHN1Ym1pdCgpIHtcbiAgICB0aGlzLmlzQXV0aGVudGljYXRpbmcgPSB0cnVlO1xuICAgIGlmICh0aGlzLmlzTG9nZ2luZ0luKSB7XG4gICAgICB0aGlzLmxvZ2luKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2lnblVwKCk7XG4gICAgfVxuICB9XG5cbiAgbG9naW4oKSB7XG4gICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmxvZ2luKHRoaXMudXNlcilcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9ICk7XG5cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKG1lc3NhZ2U6YW55KSA9PiB7XG4gICAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGluZyA9IGZhbHNlO1xuICAgICAgfSk7XG4gIH1cblxuICBzaWduVXAoKSB7XG4gICAgdGhpcy5maXJlYmFzZVNlcnZpY2UucmVnaXN0ZXIodGhpcy51c2VyKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50b2dnbGVEaXNwbGF5KCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChtZXNzYWdlOmFueSkgPT4ge1xuICAgICAgICBhbGVydChtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XG4gICAgICB9KTtcbiAgfVxuXG4gIGZvcmdvdFBhc3N3b3JkKCkge1xuXG4gICAgcHJvbXB0KHtcbiAgICAgIHRpdGxlOiBcIkZvcmdvdCBQYXNzd29yZFwiLFxuICAgICAgbWVzc2FnZTogXCJFbnRlciB0aGUgZW1haWwgYWRkcmVzcyB5b3UgdXNlZCB0byByZWdpc3RlciBmb3IgR2lmdGxlciB0byByZXNldCB5b3VyIHBhc3N3b3JkLlwiLFxuICAgICAgZGVmYXVsdFRleHQ6IFwiXCIsXG4gICAgICBva0J1dHRvblRleHQ6IFwiT2tcIixcbiAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCJcbiAgICB9KS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoZGF0YS5yZXN1bHQpIHtcbiAgICAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2UucmVzZXRQYXNzd29yZChkYXRhLnRleHQudHJpbSgpKVxuICAgICAgICAgIC50aGVuKChyZXN1bHQ6YW55KSA9PiB7XG4gICAgICAgICAgICBpZihyZXN1bHQpe1xuICAgICAgICAgICAgICBhbGVydChyZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gfVxuICBcbnRvZ2dsZURpc3BsYXkoKSB7XG4gICAgdGhpcy5pc0xvZ2dpbmdJbiA9ICF0aGlzLmlzTG9nZ2luZ0luO1xuICB9XG59Il19