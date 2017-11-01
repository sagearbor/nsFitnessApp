"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var services_1 = require("../services");
var models_1 = require("../models");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var router_1 = require("@angular/router");
var MoveALCreateComponent = (function () {
    function MoveALCreateComponent(routerExtensions, firebaseService, router) {
        this.routerExtensions = routerExtensions;
        this.firebaseService = firebaseService;
        this.router = router;
    }
    MoveALCreateComponent.prototype.ngOnInit = function () {
        this.gifts$ = this.firebaseService.getMyWishList();
        this.message$ = this.firebaseService.getMyMessage();
    };
    MoveALCreateComponent.prototype.addGift = function () {
        var _this = this;
        this.gift = new models_1.Gift(this.id, this.name, this.date, this.description, this.imagepath, this.UID);
        var myGift = this.gift.name;
        this.firebaseService.add(myGift).then(function (message) {
            _this.name = "";
            alert(message);
        });
    };
    MoveALCreateComponent.prototype.addGroup = function () {
        var _this = this;
        this.gift = new models_1.Gift(this.id, this.name, this.date, this.description, this.imagepath, this.UID);
        var myGift = this.gift.name;
        this.firebaseService.add(myGift).then(function (message) {
            _this.name = "";
            alert(message);
        });
    };
    MoveALCreateComponent.prototype.delete = function (gift) {
        this.firebaseService.delete(gift)
            .catch(function () {
            alert("An error occurred while deleting an item from your list.");
        });
    };
    MoveALCreateComponent.prototype.goToMoveAL = function () {
        this.routerExtensions.navigate(["/moveAL"], { clearHistory: true });
    };
    MoveALCreateComponent.prototype.goToMapNowAL = function () {
        this.routerExtensions.navigate(["/"], { clearHistory: true });
    };
    MoveALCreateComponent.prototype.goToMoveALCreate = function () {
        this.routerExtensions.navigate(["/moveALCreate"], { clearHistory: true });
    };
    MoveALCreateComponent.prototype.logout = function () {
        this.firebaseService.logout();
        this.routerExtensions.navigate(["/login"], { clearHistory: true });
    };
    return MoveALCreateComponent;
}());
MoveALCreateComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "al-moveALCreate",
        templateUrl: "moveALCreate.html"
    }),
    __metadata("design:paramtypes", [router_extensions_1.RouterExtensions,
        services_1.FirebaseService,
        router_1.Router])
], MoveALCreateComponent);
exports.MoveALCreateComponent = MoveALCreateComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW92ZUFMQ3JlYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1vdmVBTENyZWF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0Q7QUFHaEQsd0NBQTREO0FBQzVELG9DQUErQjtBQUMvQixtRkFBK0U7QUFDL0UsMENBQXVDO0FBT3ZDLElBQWEscUJBQXFCO0lBYWhDLCtCQUFvQixnQkFBa0MsRUFDNUMsZUFBZ0MsRUFDaEMsTUFBYztRQUZKLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDNUMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLFdBQU0sR0FBTixNQUFNLENBQVE7SUFDbkIsQ0FBQztJQUVSLHdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFRLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEQsSUFBSSxDQUFDLFFBQVEsR0FBUSxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzNELENBQUM7SUFFQyx1Q0FBTyxHQUFQO1FBQUEsaUJBYUM7UUFaRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksYUFBSSxDQUNuQixJQUFJLENBQUMsRUFBRSxFQUNQLElBQUksQ0FBQyxJQUFJLEVBQ1QsSUFBSSxDQUFDLElBQUksRUFDVCxJQUFJLENBQUMsV0FBVyxFQUNoQixJQUFJLENBQUMsU0FBUyxFQUNkLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNYLElBQUksTUFBTSxHQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ25DLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE9BQVc7WUFDaEQsS0FBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7WUFDZixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsd0NBQVEsR0FBUjtRQUFBLGlCQWFDO1FBWkUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGFBQUksQ0FDbkIsSUFBSSxDQUFDLEVBQUUsRUFDUCxJQUFJLENBQUMsSUFBSSxFQUNULElBQUksQ0FBQyxJQUFJLEVBQ1QsSUFBSSxDQUFDLFdBQVcsRUFDaEIsSUFBSSxDQUFDLFNBQVMsRUFDZCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDWCxJQUFJLE1BQU0sR0FBVSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNuQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxPQUFXO1lBQ2hELEtBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ2YsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELHNDQUFNLEdBQU4sVUFBTyxJQUFVO1FBQ2YsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO2FBQzlCLEtBQUssQ0FBQztZQUNMLEtBQUssQ0FBQywwREFBMEQsQ0FBQyxDQUFDO1FBQ3BFLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDBDQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUUsQ0FBQztJQUN2RSxDQUFDO0lBRUQsNENBQVksR0FBWjtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBRSxDQUFDO0lBQ2pFLENBQUM7SUFFRCxnREFBZ0IsR0FBaEI7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUUsQ0FBQztJQUM3RSxDQUFDO0lBRUQsc0NBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFFLENBQUM7SUFDdEUsQ0FBQztJQUNILDRCQUFDO0FBQUQsQ0FBQyxBQTVFRCxJQTRFQztBQTVFWSxxQkFBcUI7SUFMakMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsaUJBQWlCO1FBQzNCLFdBQVcsRUFBRSxtQkFBbUI7S0FDakMsQ0FBQztxQ0Fjc0Msb0NBQWdCO1FBQzNCLDBCQUFlO1FBQ3hCLGVBQU07R0FmYixxQkFBcUIsQ0E0RWpDO0FBNUVZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHtCYWNrZW5kU2VydmljZSwgRmlyZWJhc2VTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXNcIjtcbmltcG9ydCB7R2lmdH0gZnJvbSBcIi4uL21vZGVsc1wiO1xuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXIvcm91dGVyLWV4dGVuc2lvbnMnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogXCJhbC1tb3ZlQUxDcmVhdGVcIixcbiAgdGVtcGxhdGVVcmw6IFwibW92ZUFMQ3JlYXRlLmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBNb3ZlQUxDcmVhdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgZGF0ZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBpbWFnZXBhdGg6IHN0cmluZztcbiAgVUlEOiBzdHJpbmc7XG4gIHB1YmxpYyBnaWZ0OiBHaWZ0O1xuXG4gIHB1YmxpYyBnaWZ0cyQ6IE9ic2VydmFibGU8YW55PjtcbiAgcHVibGljIG1lc3NhZ2UkOiBPYnNlcnZhYmxlPGFueT47XG4gIFxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgcHJpdmF0ZSBmaXJlYmFzZVNlcnZpY2U6IEZpcmViYXNlU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXG4gICAgKSB7fVxuXG5uZ09uSW5pdCgpe1xuICB0aGlzLmdpZnRzJCA9IDxhbnk+dGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0TXlXaXNoTGlzdCgpO1xuICB0aGlzLm1lc3NhZ2UkID0gPGFueT50aGlzLmZpcmViYXNlU2VydmljZS5nZXRNeU1lc3NhZ2UoKTtcbn1cblxuICBhZGRHaWZ0KCkge1xuICAgICB0aGlzLmdpZnQgPSBuZXcgR2lmdChcbiAgICAgIHRoaXMuaWQsXG4gICAgICB0aGlzLm5hbWUsXG4gICAgICB0aGlzLmRhdGUsXG4gICAgICB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgdGhpcy5pbWFnZXBhdGgsXG4gICAgICB0aGlzLlVJRClcbiAgICBsZXQgbXlHaWZ0OnN0cmluZyA9IHRoaXMuZ2lmdC5uYW1lO1xuICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmFkZChteUdpZnQpLnRoZW4oKG1lc3NhZ2U6YW55KSA9PiB7XG4gICAgICB0aGlzLm5hbWUgPSBcIlwiO1xuICAgICAgYWxlcnQobWVzc2FnZSk7XG4gICAgfSkgICBcbiAgfVxuXG4gIGFkZEdyb3VwKCkge1xuICAgICB0aGlzLmdpZnQgPSBuZXcgR2lmdChcbiAgICAgIHRoaXMuaWQsXG4gICAgICB0aGlzLm5hbWUsXG4gICAgICB0aGlzLmRhdGUsXG4gICAgICB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgdGhpcy5pbWFnZXBhdGgsXG4gICAgICB0aGlzLlVJRClcbiAgICBsZXQgbXlHaWZ0OnN0cmluZyA9IHRoaXMuZ2lmdC5uYW1lO1xuICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmFkZChteUdpZnQpLnRoZW4oKG1lc3NhZ2U6YW55KSA9PiB7XG4gICAgICB0aGlzLm5hbWUgPSBcIlwiO1xuICAgICAgYWxlcnQobWVzc2FnZSk7XG4gICAgfSlcbiAgfVxuXG4gIGRlbGV0ZShnaWZ0OiBHaWZ0KSB7XG4gICAgdGhpcy5maXJlYmFzZVNlcnZpY2UuZGVsZXRlKGdpZnQpXG4gICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICBhbGVydChcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGRlbGV0aW5nIGFuIGl0ZW0gZnJvbSB5b3VyIGxpc3QuXCIpO1xuICAgICAgfSk7XG4gIH1cblxuICBnb1RvTW92ZUFMKCl7XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9tb3ZlQUxcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0gKTtcbiAgfVxuXG4gIGdvVG9NYXBOb3dBTCgpe1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9ICk7XG4gIH1cblxuICBnb1RvTW92ZUFMQ3JlYXRlKCl7XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9tb3ZlQUxDcmVhdGVcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0gKTtcbiAgfVxuXG4gIGxvZ291dCgpIHtcbiAgICB0aGlzLmZpcmViYXNlU2VydmljZS5sb2dvdXQoKTtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2xvZ2luXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9ICk7XG4gIH1cbn1cblxuIl19