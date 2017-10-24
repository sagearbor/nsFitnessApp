"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var services_1 = require("../services");
var models_1 = require("../models");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var router_1 = require("@angular/router");
var MapNowComponent = (function () {
    function MapNowComponent(routerExtensions, firebaseService, router) {
        this.routerExtensions = routerExtensions;
        this.firebaseService = firebaseService;
        this.router = router;
    }
    MapNowComponent.prototype.ngOnInit = function () {
        this.gifts$ = this.firebaseService.getMyWishList();
        this.message$ = this.firebaseService.getMyMessage();
    };
    MapNowComponent.prototype.add = function () {
        var _this = this;
        this.gift = new models_1.Gift(this.id, this.name, this.date, this.description, this.imagepath, this.UID);
        var myGift = this.gift.name;
        this.firebaseService.add(myGift).then(function (message) {
            _this.name = "";
            alert(message);
        });
    };
    MapNowComponent.prototype.delete = function (gift) {
        this.firebaseService.delete(gift)
            .catch(function () {
            alert("An error occurred while deleting an item from your list.");
        });
    };
    MapNowComponent.prototype.goToEatAL = function () {
        this.routerExtensions.navigate(["/eatAL"], { clearHistory: true });
    };
    MapNowComponent.prototype.goToGameAL = function () {
        this.routerExtensions.navigate(["/gameAL"], { clearHistory: true });
    };
    MapNowComponent.prototype.goToMoveAL = function () {
        this.routerExtensions.navigate(["/moveAL"], { clearHistory: true });
    };
    MapNowComponent.prototype.goToMoveALCreate = function () {
        this.routerExtensions.navigate(["/moveALCreate"], { clearHistory: true });
    };
    MapNowComponent.prototype.goToThinkAL = function () {
        this.routerExtensions.navigate(["/thinkAL"], { clearHistory: true });
    };
    MapNowComponent.prototype.logout = function () {
        this.firebaseService.logout();
        this.routerExtensions.navigate(["/login"], { clearHistory: true });
    };
    return MapNowComponent;
}());
MapNowComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "al-mapNow",
        templateUrl: "mapNow.html"
    }),
    __metadata("design:paramtypes", [router_extensions_1.RouterExtensions,
        services_1.FirebaseService,
        router_1.Router])
], MapNowComponent);
exports.MapNowComponent = MapNowComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwTm93LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hcE5vdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0Q7QUFHaEQsd0NBQTREO0FBQzVELG9DQUErQjtBQUMvQixtRkFBK0U7QUFDL0UsMENBQXVDO0FBT3ZDLElBQWEsZUFBZTtJQWExQix5QkFBb0IsZ0JBQWtDLEVBQzVDLGVBQWdDLEVBQ2hDLE1BQWM7UUFGSixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQzVDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQ25CLENBQUM7SUFFUixrQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBUSxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hELElBQUksQ0FBQyxRQUFRLEdBQVEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMzRCxDQUFDO0lBRUMsNkJBQUcsR0FBSDtRQUFBLGlCQWNDO1FBYkUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGFBQUksQ0FDbkIsSUFBSSxDQUFDLEVBQUUsRUFDUCxJQUFJLENBQUMsSUFBSSxFQUNULElBQUksQ0FBQyxJQUFJLEVBQ1QsSUFBSSxDQUFDLFdBQVcsRUFDaEIsSUFBSSxDQUFDLFNBQVMsRUFDZCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDWCxJQUFJLE1BQU0sR0FBVSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNuQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxPQUFXO1lBQ2hELEtBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ2YsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFBO0lBRUosQ0FBQztJQUVELGdDQUFNLEdBQU4sVUFBTyxJQUFVO1FBQ2YsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO2FBQzlCLEtBQUssQ0FBQztZQUNMLEtBQUssQ0FBQywwREFBMEQsQ0FBQyxDQUFDO1FBQ3BFLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELG1DQUFTLEdBQVQ7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUUsQ0FBQztJQUN0RSxDQUFDO0lBRUQsb0NBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBRSxDQUFDO0lBQ3ZFLENBQUM7SUFFRCxvQ0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFFLENBQUM7SUFDdkUsQ0FBQztJQUVELDBDQUFnQixHQUFoQjtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBRSxDQUFDO0lBQzdFLENBQUM7SUFFRCxxQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFFLENBQUM7SUFDeEUsQ0FBQztJQUVELGdDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBRSxDQUFDO0lBQ3RFLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUF0RUQsSUFzRUM7QUF0RVksZUFBZTtJQUwzQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFdBQVcsRUFBRSxhQUFhO0tBQzNCLENBQUM7cUNBY3NDLG9DQUFnQjtRQUMzQiwwQkFBZTtRQUN4QixlQUFNO0dBZmIsZUFBZSxDQXNFM0I7QUF0RVksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7QmFja2VuZFNlcnZpY2UsIEZpcmViYXNlU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzXCI7XG5pbXBvcnQge0dpZnR9IGZyb20gXCIuLi9tb2RlbHNcIjtcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyL3JvdXRlci1leHRlbnNpb25zJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6IFwiYWwtbWFwTm93XCIsXG4gIHRlbXBsYXRlVXJsOiBcIm1hcE5vdy5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgTWFwTm93Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGRhdGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgaW1hZ2VwYXRoOiBzdHJpbmc7XG4gIFVJRDogc3RyaW5nO1xuICBwdWJsaWMgZ2lmdDogR2lmdDtcblxuICBwdWJsaWMgZ2lmdHMkOiBPYnNlcnZhYmxlPGFueT47XG4gIHB1YmxpYyBtZXNzYWdlJDogT2JzZXJ2YWJsZTxhbnk+O1xuICBcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgIHByaXZhdGUgZmlyZWJhc2VTZXJ2aWNlOiBGaXJlYmFzZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxuICAgICkge31cblxubmdPbkluaXQoKXtcbiAgdGhpcy5naWZ0cyQgPSA8YW55PnRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldE15V2lzaExpc3QoKTtcbiAgdGhpcy5tZXNzYWdlJCA9IDxhbnk+dGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0TXlNZXNzYWdlKCk7XG59XG5cbiAgYWRkKCkge1xuICAgICB0aGlzLmdpZnQgPSBuZXcgR2lmdChcbiAgICAgIHRoaXMuaWQsXG4gICAgICB0aGlzLm5hbWUsXG4gICAgICB0aGlzLmRhdGUsXG4gICAgICB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgdGhpcy5pbWFnZXBhdGgsXG4gICAgICB0aGlzLlVJRClcbiAgICBsZXQgbXlHaWZ0OnN0cmluZyA9IHRoaXMuZ2lmdC5uYW1lO1xuICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmFkZChteUdpZnQpLnRoZW4oKG1lc3NhZ2U6YW55KSA9PiB7XG4gICAgICB0aGlzLm5hbWUgPSBcIlwiO1xuICAgICAgYWxlcnQobWVzc2FnZSk7XG4gICAgfSkgICBcbiAgICBcbiAgfVxuXG4gIGRlbGV0ZShnaWZ0OiBHaWZ0KSB7XG4gICAgdGhpcy5maXJlYmFzZVNlcnZpY2UuZGVsZXRlKGdpZnQpXG4gICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICBhbGVydChcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGRlbGV0aW5nIGFuIGl0ZW0gZnJvbSB5b3VyIGxpc3QuXCIpO1xuICAgICAgfSk7XG4gIH1cblxuICBnb1RvRWF0QUwoKXtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2VhdEFMXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9ICk7XG4gIH1cblxuICBnb1RvR2FtZUFMKCl7XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9nYW1lQUxcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0gKTtcbiAgfVxuXG4gIGdvVG9Nb3ZlQUwoKXtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL21vdmVBTFwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSApO1xuICB9XG5cbiAgZ29Ub01vdmVBTENyZWF0ZSgpe1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvbW92ZUFMQ3JlYXRlXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9ICk7XG4gIH1cblxuICBnb1RvVGhpbmtBTCgpe1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvdGhpbmtBTFwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSApO1xuICB9XG5cbiAgbG9nb3V0KCkge1xuICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmxvZ291dCgpO1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvbG9naW5cIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0gKTtcbiAgfVxufVxuXG4iXX0=