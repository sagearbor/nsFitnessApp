"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var services_1 = require("../services");
var models_1 = require("../models");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var router_1 = require("@angular/router");
var nativescript_drop_down_1 = require("nativescript-drop-down");
var MoveALCreateComponent = (function () {
    function MoveALCreateComponent(routerExtensions, firebaseService, router) {
        this.routerExtensions = routerExtensions;
        this.firebaseService = firebaseService;
        this.router = router;
        this.privac = null;
        this.hint = "Choose Group permissions";
        this.cssClass = "default";
    }
    MoveALCreateComponent.prototype.ngOnInit = function () {
        this.gifts$ = this.firebaseService.getMyWishList();
        this.groups$ = this.firebaseService.getMyGroupList();
        this.message$ = this.firebaseService.getMyMessage();
        this.items = new nativescript_drop_down_1.ValueList();
        this.items.push({ value: "open", display: "OPEN to world" }, { value: "closed", display: "CLOSED - invite only group" });
    };
    MoveALCreateComponent.prototype.onchange = function (args) {
        console.log("Drop Down selected index changed from " + args.oldIndex + " to " + args.newIndex + ". New value is \"" + this.items.getValue(args.newIndex) + "\"");
    };
    MoveALCreateComponent.prototype.onopen = function () {
        console.log("Drop Down opened.");
    };
    MoveALCreateComponent.prototype.onclose = function () {
        console.log("Drop Down closed.");
    };
    MoveALCreateComponent.prototype.changeStyles = function () {
        this.cssClass = "changed-styles";
    };
    MoveALCreateComponent.prototype.addGroup = function () {
        var _this = this;
        this.group = new models_1.Group(this.id, this.name, this.date, this.description, this.domainname, this.privacy, this.members, this.UID);
        var groupName = this.group.name;
        var groupDescription = this.group.description;
        var groupDomainname = this.group.domainname;
        var groupPrivacy = this.group.privacy;
        this.firebaseService.addGroup(groupName, groupDescription, groupDomainname, groupPrivacy).then(function (message) {
            _this.name = "";
            _this.description = "";
            _this.domainname = "";
            _this.privacy = "";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW92ZUFMQ3JlYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1vdmVBTENyZWF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0Q7QUFHaEQsd0NBQTREO0FBRTVELG9DQUFnQztBQUNoQyxtRkFBK0U7QUFDL0UsMENBQXVDO0FBQ3ZDLGlFQUFrRjtBQVNsRixJQUFhLHFCQUFxQjtJQXNCaEMsK0JBQW9CLGdCQUFrQyxFQUM1QyxlQUFnQyxFQUNoQyxNQUFjO1FBRkoscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUM1QyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQVpqQixXQUFNLEdBQVcsSUFBSSxDQUFDO1FBQ3RCLFNBQUksR0FBb0IsMEJBQTBCLENBQUM7UUFFbkQsYUFBUSxHQUFnQixTQUFTLENBQUM7SUFVcEMsQ0FBQztJQUVSLHdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFRLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEQsSUFBSSxDQUFDLE9BQU8sR0FBUSxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzFELElBQUksQ0FBQyxRQUFRLEdBQVEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUV6RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksa0NBQVMsRUFBVSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFDLEVBQUcsRUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSw0QkFBNEIsRUFBQyxDQUFDLENBQUM7SUFDeEgsQ0FBQztJQUVVLHdDQUFRLEdBQWYsVUFBZ0IsSUFBbUM7UUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQywy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QUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGlCQUFpQjtRQUMzQixXQUFXLEVBQUUsbUJBQW1CO0tBQ2pDLENBQUM7cUNBd0JzQyxvQ0FBZ0I7UUFDM0IsMEJBQWU7UUFDeEIsZUFBTTtHQXhCYixxQkFBcUIsQ0FxR2pDO0FBckdZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHtCYWNrZW5kU2VydmljZSwgRmlyZWJhc2VTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXNcIjtcbmltcG9ydCB7R2lmdH0gZnJvbSBcIi4uL21vZGVsc1wiO1xuaW1wb3J0IHtHcm91cH0gZnJvbSBcIi4uL21vZGVsc1wiO1xuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXIvcm91dGVyLWV4dGVuc2lvbnMnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSwgVmFsdWVMaXN0IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1kcm9wLWRvd25cIjtcbiBcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiBcImFsLW1vdmVBTENyZWF0ZVwiLFxuICB0ZW1wbGF0ZVVybDogXCJtb3ZlQUxDcmVhdGUuaHRtbFwiXG59KVxuXG5leHBvcnQgY2xhc3MgTW92ZUFMQ3JlYXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBkYXRlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGRvbWFpbm5hbWU6IHN0cmluZztcbiAgcHJpdmFjeTogc3RyaW5nO1xuICBtZW1iZXJzOiBzdHJpbmc7XG4gIFVJRDogc3RyaW5nO1xuICBwdWJsaWMgZ2lmdDogR2lmdDtcbiAgcHVibGljIGdyb3VwOiBHcm91cDtcblxuICBwdWJsaWMgcHJpdmFjOiBudW1iZXIgPSBudWxsO1xuICBwdWJsaWMgaGludCAgICAgICAgICAgICAgICAgID0gXCJDaG9vc2UgR3JvdXAgcGVybWlzc2lvbnNcIjtcbiAgcHVibGljIGl0ZW1zOiBWYWx1ZUxpc3Q8c3RyaW5nPjtcbiAgcHVibGljIGNzc0NsYXNzOiBzdHJpbmcgICAgICA9IFwiZGVmYXVsdFwiO1xuXG5cbiAgcHVibGljIGdpZnRzJDogT2JzZXJ2YWJsZTxhbnk+O1xuICBwdWJsaWMgZ3JvdXBzJDogT2JzZXJ2YWJsZTxhbnk+O1xuICBwdWJsaWMgbWVzc2FnZSQ6IE9ic2VydmFibGU8YW55PjtcbiAgXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICBwcml2YXRlIGZpcmViYXNlU2VydmljZTogRmlyZWJhc2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcbiAgICApIHt9XG5cbm5nT25Jbml0KCl7XG4gIHRoaXMuZ2lmdHMkID0gPGFueT50aGlzLmZpcmViYXNlU2VydmljZS5nZXRNeVdpc2hMaXN0KCk7XG4gIHRoaXMuZ3JvdXBzJCA9IDxhbnk+dGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0TXlHcm91cExpc3QoKTtcbiAgdGhpcy5tZXNzYWdlJCA9IDxhbnk+dGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0TXlNZXNzYWdlKCk7XG5cbiAgdGhpcy5pdGVtcyA9IG5ldyBWYWx1ZUxpc3Q8c3RyaW5nPigpO1xuICB0aGlzLml0ZW1zLnB1c2goe3ZhbHVlOiBgb3BlbmAsIGRpc3BsYXk6IGBPUEVOIHRvIHdvcmxkYH0gLCB7dmFsdWU6IGBjbG9zZWRgLCBkaXNwbGF5OiBgQ0xPU0VEIC0gaW52aXRlIG9ubHkgZ3JvdXBgfSk7XG59XG5cbiAgICBwdWJsaWMgb25jaGFuZ2UoYXJnczogU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coYERyb3AgRG93biBzZWxlY3RlZCBpbmRleCBjaGFuZ2VkIGZyb20gJHthcmdzLm9sZEluZGV4fSB0byAke2FyZ3MubmV3SW5kZXh9LiBOZXcgdmFsdWUgaXMgXCIke3RoaXMuaXRlbXMuZ2V0VmFsdWUoXG4gICAgICAgICAgICBhcmdzLm5ld0luZGV4KX1cImApO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbm9wZW4oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRHJvcCBEb3duIG9wZW5lZC5cIik7XG4gICAgfVxuXG4gICAgcHVibGljIG9uY2xvc2UoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRHJvcCBEb3duIGNsb3NlZC5cIik7XG4gICAgfVxuXG4gICAgcHVibGljIGNoYW5nZVN0eWxlcygpIHtcbiAgICAgICAgdGhpcy5jc3NDbGFzcyA9IFwiY2hhbmdlZC1zdHlsZXNcIjtcbiAgICB9XG5cblxuXG4gIGFkZEdyb3VwKCkge1xuICAgICB0aGlzLmdyb3VwID0gbmV3IEdyb3VwKFxuICAgICAgdGhpcy5pZCxcbiAgICAgIHRoaXMubmFtZSxcbiAgICAgIHRoaXMuZGF0ZSxcbiAgICAgIHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICB0aGlzLmRvbWFpbm5hbWUsXG4gICAgICB0aGlzLnByaXZhY3ksXG4gICAgICB0aGlzLm1lbWJlcnMsXG4gICAgICB0aGlzLlVJRClcbiAgICBsZXQgZ3JvdXBOYW1lOnN0cmluZyA9IHRoaXMuZ3JvdXAubmFtZTtcbiAgICBsZXQgZ3JvdXBEZXNjcmlwdGlvbjpzdHJpbmcgPSB0aGlzLmdyb3VwLmRlc2NyaXB0aW9uO1xuICAgIGxldCBncm91cERvbWFpbm5hbWU6c3RyaW5nID0gdGhpcy5ncm91cC5kb21haW5uYW1lO1xuICAgIGxldCBncm91cFByaXZhY3k6c3RyaW5nID0gdGhpcy5ncm91cC5wcml2YWN5O1xuICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmFkZEdyb3VwKGdyb3VwTmFtZSxncm91cERlc2NyaXB0aW9uLGdyb3VwRG9tYWlubmFtZSxncm91cFByaXZhY3kpLnRoZW4oKG1lc3NhZ2U6YW55KSA9PiB7XG4gICAgICB0aGlzLm5hbWUgPSBcIlwiO1xuICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiXCI7XG4gICAgICB0aGlzLmRvbWFpbm5hbWUgPSBcIlwiO1xuICAgICAgdGhpcy5wcml2YWN5ID0gXCJcIjtcbiAgICAgIGFsZXJ0KG1lc3NhZ2UpO1xuICAgIH0pXG4gIH1cblxuICBkZWxldGUoZ2lmdDogR2lmdCkge1xuICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmRlbGV0ZShnaWZ0KVxuICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgIGFsZXJ0KFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgZGVsZXRpbmcgYW4gaXRlbSBmcm9tIHlvdXIgbGlzdC5cIik7XG4gICAgICB9KTtcbiAgfVxuXG4gIGdvVG9Nb3ZlQUwoKXtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL21vdmVBTFwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSApO1xuICB9XG5cbiAgZ29Ub01hcE5vd0FMKCl7XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9cIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0gKTtcbiAgfVxuXG4gIGdvVG9Nb3ZlQUxDcmVhdGUoKXtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL21vdmVBTENyZWF0ZVwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSApO1xuICB9XG5cbiAgbG9nb3V0KCkge1xuICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmxvZ291dCgpO1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvbG9naW5cIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0gKTtcbiAgfVxufVxuXG4iXX0=