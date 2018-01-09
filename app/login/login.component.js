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
    LoginComponent.prototype.onPickerLoaded = function (args) {
        var datePicker = args.object;
        datePicker.year = 2010;
        datePicker.month = 6;
        datePicker.day = 6;
        datePicker.minDate = new Date(1940, 0, 1);
        datePicker.maxDate = new Date(2025, 12, 30);
    };
    LoginComponent.prototype.onDateChanged = function (args) {
        console.log("Date changed");
        console.log("New value: " + args.value);
        console.log("Old value: " + args.oldValue);
        this.user.dobInMilliseconds = args.value;
    };
    LoginComponent.prototype.onDayChanged = function (args) {
        console.log("Day changed");
        console.log("New value: " + args.value);
        console.log("Old value: " + args.oldValue);
        this.user.dobDD = args.value;
    };
    LoginComponent.prototype.onMonthChanged = function (args) {
        console.log("Month changed");
        console.log("New value: " + args.value);
        console.log("Old value: " + args.oldValue);
        this.user.dobMM = args.value;
    };
    LoginComponent.prototype.onYearChanged = function (args) {
        console.log("Year changed");
        console.log("New value: " + args.value);
        console.log("Old value: " + args.oldValue);
        this.user.dobYYYY = args.value;
    };
    LoginComponent.prototype.signUp = function () {
        var _this = this;
        console.log("GOT HEREE 1212 < ------------- " + JSON.stringify(this.user));
        console.log("GOT HEREE 1222 < ------------- " + JSON.stringify(this.user));
        /**   */
        var newUser = { email: this.user.email, userUID: backend_service_1.BackendService.token, fName: this.user.fName, lName: this.user.lName, dob: Date.now(), gender: this.user.gender, weight: this.user.weight, goalWeight: this.user.goalWeight, favActivity: this.user.favActivity };
        console.log("GOT HEREE 2121 < ------------- ");
        this.firebaseService.register(this.user)
            .then(function () {
            _this.isAuthenticating = false;
            _this.toggleDisplay();
            /**  */
            console.log("7777777777777777777777777" + JSON.stringify(_this.user));
            console.log("77777" + JSON.stringify(newUser));
            console.log("67777777777777777777777777" + JSON.stringify(_this.user));
        })
            .catch(function (message) {
            alert(message);
            _this.isAuthenticating = false;
        });
        /**  DONT INCLUDE AN ERROR MESSAGE OR IT OVERRIDES THE FB ERROR MESSAGE IF USER EMAIL ALREADY CREATED
        this.firebaseService.addNewUser(newUser.email,newUser.userUID,newUser.fName,newUser.lName,newUser.dob,newUser.gender,newUser.weight,newUser.goalWeight,newUser.favActivity)
        ;
           .then((message:any) => {alert(message);})
           */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdDO0FBRXhDLG9DQUE0QztBQUM1Qyx3Q0FBNEM7QUFDNUMsc0NBQWtDO0FBQ2xDLG1GQUFpRjtBQUNqRiwrREFBNkQ7QUFXN0QsSUFBYSxjQUFjO0lBb0J6Qix3QkFBb0IsZUFBZ0MsRUFDaEMsZ0JBQWtDO1FBRGxDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBcEJ0RCxnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFxQmIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGFBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLGlDQUFpQyxDQUFDO1FBQzNELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztJQUMzQixDQUFDO0lBRVosK0JBQU0sR0FBTjtRQUNHLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDN0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hCLENBQUM7SUFDSCxDQUFDO0lBRUQsOEJBQUssR0FBTDtRQUFBLGlCQVVDO1FBVEUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNuQyxJQUFJLENBQUM7WUFDSixLQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1lBQzlCLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FB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SUFDSixDQUFDO0lBRUQsdUNBQWMsR0FBZDtRQUFBLGlCQWlCQztRQWhCQyxnQkFBTSxDQUFDO1lBQ0wsS0FBSyxFQUFFLGlCQUFpQjtZQUN4QixPQUFPLEVBQUUsb0ZBQW9GO1lBQzdGLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLElBQUk7WUFDbEIsZ0JBQWdCLEVBQUUsUUFBUTtTQUMzQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSTtZQUNYLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNoQixLQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO3FCQUNqRCxJQUFJLENBQUMsVUFBQyxNQUFVO29CQUNmLEVBQUUsQ0FBQSxDQUFDLE1BQU0sQ0FBQyxDQUFBLENBQUM7d0JBQ1QsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNoQixDQUFDO2dCQUNKLENBQUMsQ0FBQyxDQUFDO1lBQ04sQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVILHNDQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN2QyxDQUFDO0lBRUgscUJBQUM7QUFBRCxDQUFDLEFBdklELElBdUlDO0FBdklZLGNBQWM7SUFOMUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsVUFBVTtRQUNwQixXQUFXLEVBQUUsWUFBWTtLQUMxQixDQUFDO3FDQXNCcUMsMEJBQWU7UUFDZCxvQ0FBZ0I7R0FyQjNDLGNBQWMsQ0F1STFCO0FBdklZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHtVc2VyLCBHaWZ0LCBHcm91cH0gZnJvbSBcIi4uL21vZGVsc1wiO1xuaW1wb3J0IHtGaXJlYmFzZVNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2VzJztcbmltcG9ydCB7cHJvbXB0fSBmcm9tIFwidWkvZGlhbG9nc1wiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlci9yb3V0ZXItZXh0ZW5zaW9ucyc7XG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9iYWNrZW5kLnNlcnZpY2VcIjtcbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gXCJ1aS9kYXRlLXBpY2tlclwiO1xuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhbC1sb2dpbicsXG4gIHRlbXBsYXRlVXJsOiAnbG9naW4uaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XG4gIGlzTG9nZ2luZ0luID0gdHJ1ZTtcbiAgaXNBdXRoZW50aWNhdGluZyA9IGZhbHNlO1xuICB1c2VyVUlEOiBzdHJpbmc7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG4gIHVzZXJuYW1lOiBzdHJpbmc7XG4gIGZOYW1lOiBzdHJpbmc7XG4gIGxOYW1lOiBzdHJpbmc7XG4gIGRvYllZWVk6IHN0cmluZztcbiAgZG9iTU06IHN0cmluZztcbiAgZG9iREQ6IHN0cmluZztcbiAgZG9iSW5NaWxsaXNlY29uZHM6IG51bWJlcjtcbiAgZ2VuZGVyOiBzdHJpbmc7XG4gIHdlaWdodDogc3RyaW5nO1xuICBnb2FsV2VpZ2h0OiBzdHJpbmc7XG4gIGZhdkFjdGl2aXR5OiBzdHJpbmc7XG5cbiAgdXNlcjogVXNlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZpcmViYXNlU2VydmljZTogRmlyZWJhc2VTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnNcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xuICAgICAgICAgICAgICB0aGlzLnVzZXIuZW1haWwgPSBcInNhZ2VhcmJvcitBTGd1ZXN0QHNhZ2VhcmJvci5jb21cIjtcblx0ICAgICAgdGhpcy51c2VyLnBhc3N3b3JkID0gXCJQYXNzd29yZFwiO1xuICAgICAgICAgICAgfVxuIFxuIHN1Ym1pdCgpIHtcbiAgICB0aGlzLmlzQXV0aGVudGljYXRpbmcgPSB0cnVlO1xuICAgIGlmICh0aGlzLmlzTG9nZ2luZ0luKSB7XG4gICAgICB0aGlzLmxvZ2luKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2lnblVwKCk7XG4gICAgfVxuICB9XG5cbiAgbG9naW4oKSB7XG4gICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmxvZ2luKHRoaXMudXNlcilcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9ICk7XG5cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKG1lc3NhZ2U6YW55KSA9PiB7XG4gICAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGluZyA9IGZhbHNlO1xuICAgICAgfSk7XG4gIH1cblxuICAgIG9uUGlja2VyTG9hZGVkKGFyZ3MpIHtcbiAgICAgICAgbGV0IGRhdGVQaWNrZXIgPSA8RGF0ZVBpY2tlcj5hcmdzLm9iamVjdDtcbiAgICAgICAgZGF0ZVBpY2tlci55ZWFyID0gMjAxMDtcbiAgICAgICAgZGF0ZVBpY2tlci5tb250aCA9IDY7XG4gICAgICAgIGRhdGVQaWNrZXIuZGF5ID0gNjtcbiAgICAgICAgZGF0ZVBpY2tlci5taW5EYXRlID0gbmV3IERhdGUoMTk0MCwgMCwgMSk7XG4gICAgICAgIGRhdGVQaWNrZXIubWF4RGF0ZSA9IG5ldyBEYXRlKDIwMjUsIDEyLCAzMCk7XG4gICAgICAgIH1cbiAgICBvbkRhdGVDaGFuZ2VkKGFyZ3MpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJEYXRlIGNoYW5nZWRcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTmV3IHZhbHVlOiBcIiArIGFyZ3MudmFsdWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIk9sZCB2YWx1ZTogXCIgKyBhcmdzLm9sZFZhbHVlKTtcbiAgICAgICAgdGhpcy51c2VyLmRvYkluTWlsbGlzZWNvbmRzID0gYXJncy52YWx1ZTtcbiAgICAgICAgfVxuICAgIG9uRGF5Q2hhbmdlZChhcmdzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGF5IGNoYW5nZWRcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTmV3IHZhbHVlOiBcIiArIGFyZ3MudmFsdWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIk9sZCB2YWx1ZTogXCIgKyBhcmdzLm9sZFZhbHVlKTtcbiAgICAgICAgdGhpcy51c2VyLmRvYkREID0gYXJncy52YWx1ZTtcbiAgICAgICAgfVxuICAgIG9uTW9udGhDaGFuZ2VkKGFyZ3MpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJNb250aCBjaGFuZ2VkXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5ldyB2YWx1ZTogXCIgKyBhcmdzLnZhbHVlKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJPbGQgdmFsdWU6IFwiICsgYXJncy5vbGRWYWx1ZSk7XG4gICAgICAgIHRoaXMudXNlci5kb2JNTSA9IGFyZ3MudmFsdWU7XG4gICAgICAgIH1cbiAgICBvblllYXJDaGFuZ2VkKGFyZ3MpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJZZWFyIGNoYW5nZWRcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTmV3IHZhbHVlOiBcIiArIGFyZ3MudmFsdWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIk9sZCB2YWx1ZTogXCIgKyBhcmdzLm9sZFZhbHVlKTtcbiAgICAgICAgdGhpcy51c2VyLmRvYllZWVkgPSBhcmdzLnZhbHVlO1xuICAgICAgICB9XG5cblxuXG4gIHNpZ25VcCgpIHtcbiAgICBjb25zb2xlLmxvZyhcIkdPVCBIRVJFRSAxMjEyIDwgLS0tLS0tLS0tLS0tLSBcIiArIEpTT04uc3RyaW5naWZ5KHRoaXMudXNlcikpOyAgXG4gICAgY29uc29sZS5sb2coXCJHT1QgSEVSRUUgMTIyMiA8IC0tLS0tLS0tLS0tLS0gXCIgKyBKU09OLnN0cmluZ2lmeSh0aGlzLnVzZXIpKTsgIFxuICAgIC8qKiAgICovXG4gICAgbGV0IG5ld1VzZXIgPSB7ZW1haWw6IHRoaXMudXNlci5lbWFpbCAsIHVzZXJVSUQ6IEJhY2tlbmRTZXJ2aWNlLnRva2VuICwgZk5hbWU6IHRoaXMudXNlci5mTmFtZSAsIGxOYW1lOiB0aGlzLnVzZXIubE5hbWUgLCBkb2I6IERhdGUubm93KCkgLCBnZW5kZXI6IHRoaXMudXNlci5nZW5kZXIgLCB3ZWlnaHQ6IHRoaXMudXNlci53ZWlnaHQgLCBnb2FsV2VpZ2h0OiB0aGlzLnVzZXIuZ29hbFdlaWdodCAsIGZhdkFjdGl2aXR5OiB0aGlzLnVzZXIuZmF2QWN0aXZpdHkgfTtcbiAgICBcbiAgICBjb25zb2xlLmxvZyhcIkdPVCBIRVJFRSAyMTIxIDwgLS0tLS0tLS0tLS0tLSBcIik7XG4gICAgdGhpcy5maXJlYmFzZVNlcnZpY2UucmVnaXN0ZXIodGhpcy51c2VyKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50b2dnbGVEaXNwbGF5KCk7XG5cdC8qKiAgKi8gIFxuXHRjb25zb2xlLmxvZyhcIjc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3NzdcIiArIEpTT04uc3RyaW5naWZ5KHRoaXMudXNlcikpOyAgXG5cdGNvbnNvbGUubG9nKFwiNzc3NzdcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VzZXIpKTsgIFxuXHRjb25zb2xlLmxvZyhcIjY3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3XCIgKyBKU09OLnN0cmluZ2lmeSh0aGlzLnVzZXIpKTsgIFxuXHR9KVxuICAgICAgLmNhdGNoKChtZXNzYWdlOmFueSkgPT4ge1xuICAgICAgICBhbGVydChtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XG5cdH0pO1xuIFxuXHQvKiogIERPTlQgSU5DTFVERSBBTiBFUlJPUiBNRVNTQUdFIE9SIElUIE9WRVJSSURFUyBUSEUgRkIgRVJST1IgTUVTU0FHRSBJRiBVU0VSIEVNQUlMIEFMUkVBRFkgQ1JFQVRFRCAgXG5cdHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmFkZE5ld1VzZXIobmV3VXNlci5lbWFpbCxuZXdVc2VyLnVzZXJVSUQsbmV3VXNlci5mTmFtZSxuZXdVc2VyLmxOYW1lLG5ld1VzZXIuZG9iLG5ld1VzZXIuZ2VuZGVyLG5ld1VzZXIud2VpZ2h0LG5ld1VzZXIuZ29hbFdlaWdodCxuZXdVc2VyLmZhdkFjdGl2aXR5KVxuXHQ7ICAgXG5cdCAgIC50aGVuKChtZXNzYWdlOmFueSkgPT4ge2FsZXJ0KG1lc3NhZ2UpO30pXG5cdCAgICovXG4gIH1cbiAgXG4gIGZvcmdvdFBhc3N3b3JkKCkge1xuICAgIHByb21wdCh7XG4gICAgICB0aXRsZTogXCJGb3Jnb3QgUGFzc3dvcmRcIixcbiAgICAgIG1lc3NhZ2U6IFwiRW50ZXIgdGhlIGVtYWlsIGFkZHJlc3MgeW91IHVzZWQgdG8gcmVnaXN0ZXIgZm9yIEFyYm9yTGlmZSB0byByZXNldCB5b3VyIHBhc3N3b3JkLlwiLFxuICAgICAgZGVmYXVsdFRleHQ6IFwiXCIsXG4gICAgICBva0J1dHRvblRleHQ6IFwiT2tcIixcbiAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCJcbiAgICB9KS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoZGF0YS5yZXN1bHQpIHtcbiAgICAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2UucmVzZXRQYXNzd29yZChkYXRhLnRleHQudHJpbSgpKVxuICAgICAgICAgIC50aGVuKChyZXN1bHQ6YW55KSA9PiB7XG4gICAgICAgICAgICBpZihyZXN1bHQpe1xuICAgICAgICAgICAgICBhbGVydChyZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgXG50b2dnbGVEaXNwbGF5KCkge1xuICAgIHRoaXMuaXNMb2dnaW5nSW4gPSAhdGhpcy5pc0xvZ2dpbmdJbjtcbiAgfVxuXG59XG4iXX0=