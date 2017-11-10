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
        this.groups$ = this.firebaseService.getMyGroupList();
        this.message$ = this.firebaseService.getMyMessage();
    };
    MoveALCreateComponent.prototype.addGroup = function () {
        var _this = this;
        this.group = new models_1.Group(this.id, this.name, this.date, this.description, this.domainname, this.country, this.latitude, this.longitude, this.UID);
        var myGroup = this.group.name;
        var myDescription = this.group.description;
        var myDomainname = this.group.domainname;
        var myCountry = this.group.country;
        var myLatitude = this.group.latitude;
        var myLongitude = this.group.longitude;
        this.firebaseService.addGroup(myGroup, myDescription, myDomainname, myCountry, myLatitude, myLongitude).then(function (message) {
            _this.name = "";
            _this.description = "";
            _this.domainname = "";
            _this.country = "";
            _this.latitude = "";
            _this.longitude = "";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW92ZUFMQ3JlYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1vdmVBTENyZWF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0Q7QUFHaEQsd0NBQTREO0FBRTVELG9DQUFnQztBQUNoQyxtRkFBK0U7QUFDL0UsMENBQXVDO0FBT3ZDLElBQWEscUJBQXFCO0lBa0JoQywrQkFBb0IsZ0JBQWtDLEVBQzVDLGVBQWdDLEVBQ2hDLE1BQWM7UUFGSixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQzVDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQ25CLENBQUM7SUFFUix3Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBUSxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hELElBQUksQ0FBQyxPQUFPLEdBQVEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMxRCxJQUFJLENBQUMsUUFBUSxHQUFRLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDM0QsQ0FBQztJQUVDLHdDQUFRLEdBQVI7UUFBQSxpQkEwQkM7UUF6QkUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGNBQUssQ0FDckIsSUFBSSxDQUFDLEVBQUUsRUFDUCxJQUFJLENBQUMsSUFBSSxFQUNULElBQUksQ0FBQyxJQUFJLEVBQ1QsSUFBSSxDQUFDLFdBQVcsRUFDaEIsSUFBSSxDQUFDLFVBQVUsRUFDZixJQUFJLENBQUMsT0FBTyxFQUNaLElBQUksQ0FBQyxRQUFRLEVBQ2IsSUFBSSxDQUFDLFNBQVMsRUFDZCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDWCxJQUFJLE9BQU8sR0FBVSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztRQUNyQyxJQUFJLGFBQWEsR0FBVSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQztRQUNsRCxJQUFJLFlBQVksR0FBVSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQztRQUNoRCxJQUFJLFNBQVMsR0FBVSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUMxQyxJQUFJLFVBQVUsR0FBVSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUM1QyxJQUFJLFdBQVcsR0FBVSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUM5QyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUMsYUFBYSxFQUFDLFlBQVksRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE9BQVc7WUFDbEgsS0FBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7WUFDZixLQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztZQUN0QixLQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztZQUNyQixLQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztZQUNsQixLQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztZQUNuQixLQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztZQUNwQixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsc0NBQU0sR0FBTixVQUFPLElBQVU7UUFDZixJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7YUFDaEMsS0FBSyxDQUFDO1lBQ0gsS0FBSyxDQUFDLDBEQUEwRCxDQUFDLENBQUM7UUFDcEUsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsMENBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBRSxDQUFDO0lBQ3ZFLENBQUM7SUFFRCw0Q0FBWSxHQUFaO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFFLENBQUM7SUFDakUsQ0FBQztJQUVELGdEQUFnQixHQUFoQjtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBRSxDQUFDO0lBQzdFLENBQUM7SUFFRCxzQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUUsQ0FBQztJQUN0RSxDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQUFDLEFBaEZELElBZ0ZDO0FBaEZZLHFCQUFxQjtJQUxqQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxpQkFBaUI7UUFDM0IsV0FBVyxFQUFFLG1CQUFtQjtLQUNqQyxDQUFDO3FDQW1Cc0Msb0NBQWdCO1FBQzNCLDBCQUFlO1FBQ3hCLGVBQU07R0FwQmIscUJBQXFCLENBZ0ZqQztBQWhGWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7QmFja2VuZFNlcnZpY2UsIEZpcmViYXNlU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzXCI7XG5pbXBvcnQge0dpZnR9IGZyb20gXCIuLi9tb2RlbHNcIjtcbmltcG9ydCB7R3JvdXB9IGZyb20gXCIuLi9tb2RlbHNcIjtcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyL3JvdXRlci1leHRlbnNpb25zJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6IFwiYWwtbW92ZUFMQ3JlYXRlXCIsXG4gIHRlbXBsYXRlVXJsOiBcIm1vdmVBTENyZWF0ZS5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgTW92ZUFMQ3JlYXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGRhdGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgZG9tYWlubmFtZTogc3RyaW5nO1xuICBjb3VudHJ5OiBzdHJpbmc7XG4gIGxhdGl0dWRlOiBzdHJpbmc7XG4gIGxvbmdpdHVkZTogc3RyaW5nO1xuICBVSUQ6IHN0cmluZztcbiAgcHVibGljIGdpZnQ6IEdpZnQ7XG4gIHB1YmxpYyBncm91cDogR3JvdXA7XG5cbiAgcHVibGljIGdpZnRzJDogT2JzZXJ2YWJsZTxhbnk+O1xuICBwdWJsaWMgZ3JvdXBzJDogT2JzZXJ2YWJsZTxhbnk+O1xuICBwdWJsaWMgbWVzc2FnZSQ6IE9ic2VydmFibGU8YW55PjtcbiAgXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICBwcml2YXRlIGZpcmViYXNlU2VydmljZTogRmlyZWJhc2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcbiAgICApIHt9XG5cbm5nT25Jbml0KCl7XG4gIHRoaXMuZ2lmdHMkID0gPGFueT50aGlzLmZpcmViYXNlU2VydmljZS5nZXRNeVdpc2hMaXN0KCk7XG4gIHRoaXMuZ3JvdXBzJCA9IDxhbnk+dGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0TXlHcm91cExpc3QoKTtcbiAgdGhpcy5tZXNzYWdlJCA9IDxhbnk+dGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0TXlNZXNzYWdlKCk7XG59XG5cbiAgYWRkR3JvdXAoKSB7XG4gICAgIHRoaXMuZ3JvdXAgPSBuZXcgR3JvdXAoXG4gICAgICB0aGlzLmlkLFxuICAgICAgdGhpcy5uYW1lLFxuICAgICAgdGhpcy5kYXRlLFxuICAgICAgdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgIHRoaXMuZG9tYWlubmFtZSxcbiAgICAgIHRoaXMuY291bnRyeSxcbiAgICAgIHRoaXMubGF0aXR1ZGUsXG4gICAgICB0aGlzLmxvbmdpdHVkZSxcbiAgICAgIHRoaXMuVUlEKVxuICAgIGxldCBteUdyb3VwOnN0cmluZyA9IHRoaXMuZ3JvdXAubmFtZTtcbiAgICBsZXQgbXlEZXNjcmlwdGlvbjpzdHJpbmcgPSB0aGlzLmdyb3VwLmRlc2NyaXB0aW9uO1xuICAgIGxldCBteURvbWFpbm5hbWU6c3RyaW5nID0gdGhpcy5ncm91cC5kb21haW5uYW1lO1xuICAgIGxldCBteUNvdW50cnk6c3RyaW5nID0gdGhpcy5ncm91cC5jb3VudHJ5O1xuICAgIGxldCBteUxhdGl0dWRlOnN0cmluZyA9IHRoaXMuZ3JvdXAubGF0aXR1ZGU7XG4gICAgbGV0IG15TG9uZ2l0dWRlOnN0cmluZyA9IHRoaXMuZ3JvdXAubG9uZ2l0dWRlO1xuICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmFkZEdyb3VwKG15R3JvdXAsbXlEZXNjcmlwdGlvbixteURvbWFpbm5hbWUsbXlDb3VudHJ5LG15TGF0aXR1ZGUsbXlMb25naXR1ZGUpLnRoZW4oKG1lc3NhZ2U6YW55KSA9PiB7XG4gICAgICB0aGlzLm5hbWUgPSBcIlwiO1xuICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiXCI7XG4gICAgICB0aGlzLmRvbWFpbm5hbWUgPSBcIlwiO1xuICAgICAgdGhpcy5jb3VudHJ5ID0gXCJcIjtcbiAgICAgIHRoaXMubGF0aXR1ZGUgPSBcIlwiO1xuICAgICAgdGhpcy5sb25naXR1ZGUgPSBcIlwiO1xuICAgICAgYWxlcnQobWVzc2FnZSk7XG4gICAgfSlcbiAgfVxuXG4gIGRlbGV0ZShnaWZ0OiBHaWZ0KSB7XG4gICAgdGhpcy5maXJlYmFzZVNlcnZpY2UuZGVsZXRlKGdpZnQpXG4gICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgYWxlcnQoXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBkZWxldGluZyBhbiBpdGVtIGZyb20geW91ciBsaXN0LlwiKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgZ29Ub01vdmVBTCgpe1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvbW92ZUFMXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9ICk7XG4gIH1cblxuICBnb1RvTWFwTm93QUwoKXtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL1wiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSApO1xuICB9XG5cbiAgZ29Ub01vdmVBTENyZWF0ZSgpe1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvbW92ZUFMQ3JlYXRlXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9ICk7XG4gIH1cblxuICBsb2dvdXQoKSB7XG4gICAgdGhpcy5maXJlYmFzZVNlcnZpY2UubG9nb3V0KCk7XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9sb2dpblwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSApO1xuICB9XG59XG5cbiJdfQ==