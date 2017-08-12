"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var services_1 = require("../services");
var models_1 = require("../models");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var router_1 = require("@angular/router");
var ThinkALComponent = (function () {
    function ThinkALComponent(routerExtensions, firebaseService, router) {
        this.routerExtensions = routerExtensions;
        this.firebaseService = firebaseService;
        this.router = router;
    }
    ThinkALComponent.prototype.ngOnInit = function () {
        this.gifts$ = this.firebaseService.getMyWishList();
        this.message$ = this.firebaseService.getMyMessage();
    };
    ThinkALComponent.prototype.add = function () {
        var _this = this;
        this.gift = new models_1.Gift(this.id, this.name, this.date, this.description, this.imagepath, this.UID);
        var myGift = this.gift.name;
        this.firebaseService.add(myGift).then(function (message) {
            _this.name = "";
            alert(message);
        });
    };
    ThinkALComponent.prototype.delete = function (gift) {
        this.firebaseService.delete(gift)
            .catch(function () {
            alert("An error occurred while deleting an item from your list.");
        });
    };
    ThinkALComponent.prototype.goToMoveAL = function () {
        this.routerExtensions.navigate(["/moveAL"], { clearHistory: true });
    };
    ThinkALComponent.prototype.goToMapNowAL = function () {
        this.routerExtensions.navigate(["/"], { clearHistory: true });
    };
    ThinkALComponent.prototype.logout = function () {
        this.firebaseService.logout();
        this.routerExtensions.navigate(["/login"], { clearHistory: true });
    };
    return ThinkALComponent;
}());
ThinkALComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "gf-thinkAL",
        templateUrl: "thinkAL.html"
    }),
    __metadata("design:paramtypes", [router_extensions_1.RouterExtensions,
        services_1.FirebaseService,
        router_1.Router])
], ThinkALComponent);
exports.ThinkALComponent = ThinkALComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhpbmtBTC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0aGlua0FMLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRDtBQUdoRCx3Q0FBNEQ7QUFDNUQsb0NBQStCO0FBQy9CLG1GQUErRTtBQUMvRSwwQ0FBdUM7QUFPdkMsSUFBYSxnQkFBZ0I7SUFhM0IsMEJBQW9CLGdCQUFrQyxFQUM1QyxlQUFnQyxFQUNoQyxNQUFjO1FBRkoscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUM1QyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUNuQixDQUFDO0lBRVIsbUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQVEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4RCxJQUFJLENBQUMsUUFBUSxHQUFRLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDM0QsQ0FBQztJQUVDLDhCQUFHLEdBQUg7UUFBQSxpQkFjQztRQWJFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxhQUFJLENBQ25CLElBQUksQ0FBQyxFQUFFLEVBQ1AsSUFBSSxDQUFDLElBQUksRUFDVCxJQUFJLENBQUMsSUFBSSxFQUNULElBQUksQ0FBQyxXQUFXLEVBQ2hCLElBQUksQ0FBQyxTQUFTLEVBQ2QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ1gsSUFBSSxNQUFNLEdBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDbkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsT0FBVztZQUNoRCxLQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNmLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQTtJQUVKLENBQUM7SUFFRCxpQ0FBTSxHQUFOLFVBQU8sSUFBVTtRQUNmLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzthQUM5QixLQUFLLENBQUM7WUFDTCxLQUFLLENBQUMsMERBQTBELENBQUMsQ0FBQztRQUNwRSxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxxQ0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFFLENBQUM7SUFDdkUsQ0FBQztJQUVELHVDQUFZLEdBQVo7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUUsQ0FBQztJQUNqRSxDQUFDO0lBRUQsaUNBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFFLENBQUM7SUFDdEUsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQTFERCxJQTBEQztBQTFEWSxnQkFBZ0I7SUFMNUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsWUFBWTtRQUN0QixXQUFXLEVBQUUsY0FBYztLQUM1QixDQUFDO3FDQWNzQyxvQ0FBZ0I7UUFDM0IsMEJBQWU7UUFDeEIsZUFBTTtHQWZiLGdCQUFnQixDQTBENUI7QUExRFksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQge0JhY2tlbmRTZXJ2aWNlLCBGaXJlYmFzZVNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlc1wiO1xuaW1wb3J0IHtHaWZ0fSBmcm9tIFwiLi4vbW9kZWxzXCI7XG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlci9yb3V0ZXItZXh0ZW5zaW9ucyc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiBcImdmLXRoaW5rQUxcIixcbiAgdGVtcGxhdGVVcmw6IFwidGhpbmtBTC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgVGhpbmtBTENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBkYXRlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGltYWdlcGF0aDogc3RyaW5nO1xuICBVSUQ6IHN0cmluZztcbiAgcHVibGljIGdpZnQ6IEdpZnQ7XG5cbiAgcHVibGljIGdpZnRzJDogT2JzZXJ2YWJsZTxhbnk+O1xuICBwdWJsaWMgbWVzc2FnZSQ6IE9ic2VydmFibGU8YW55PjtcbiAgXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICBwcml2YXRlIGZpcmViYXNlU2VydmljZTogRmlyZWJhc2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcbiAgICApIHt9XG5cbm5nT25Jbml0KCl7XG4gIHRoaXMuZ2lmdHMkID0gPGFueT50aGlzLmZpcmViYXNlU2VydmljZS5nZXRNeVdpc2hMaXN0KCk7XG4gIHRoaXMubWVzc2FnZSQgPSA8YW55PnRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldE15TWVzc2FnZSgpO1xufVxuXG4gIGFkZCgpIHtcbiAgICAgdGhpcy5naWZ0ID0gbmV3IEdpZnQoXG4gICAgICB0aGlzLmlkLFxuICAgICAgdGhpcy5uYW1lLFxuICAgICAgdGhpcy5kYXRlLFxuICAgICAgdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgIHRoaXMuaW1hZ2VwYXRoLFxuICAgICAgdGhpcy5VSUQpXG4gICAgbGV0IG15R2lmdDpzdHJpbmcgPSB0aGlzLmdpZnQubmFtZTtcbiAgICB0aGlzLmZpcmViYXNlU2VydmljZS5hZGQobXlHaWZ0KS50aGVuKChtZXNzYWdlOmFueSkgPT4ge1xuICAgICAgdGhpcy5uYW1lID0gXCJcIjtcbiAgICAgIGFsZXJ0KG1lc3NhZ2UpO1xuICAgIH0pICAgXG4gICAgXG4gIH1cblxuICBkZWxldGUoZ2lmdDogR2lmdCkge1xuICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmRlbGV0ZShnaWZ0KVxuICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgYWxlcnQoXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBkZWxldGluZyBhbiBpdGVtIGZyb20geW91ciBsaXN0LlwiKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgZ29Ub01vdmVBTCgpe1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvbW92ZUFMXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9ICk7XG4gIH1cblxuICBnb1RvTWFwTm93QUwoKXtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL1wiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSApO1xuICB9XG5cbiAgbG9nb3V0KCkge1xuICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmxvZ291dCgpO1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvbG9naW5cIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0gKTtcbiAgfVxufVxuXG4iXX0=