"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var services_1 = require("../services");
var models_1 = require("../models");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var router_1 = require("@angular/router");
var nativescript_drop_down_1 = require("nativescript-drop-down");
var firebase = require("nativescript-plugin-firebase");
var MoveALCreateComponent = (function () {
    function MoveALCreateComponent(routerExtensions, firebaseService, router) {
        this.routerExtensions = routerExtensions;
        this.firebaseService = firebaseService;
        this.router = router;
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
        this.group = new models_1.Group(this.id, this.name, this.date, this.description, this.domainname, this.privacy, this.members, this.admins, this.UID);
        this.group.admins = services_1.BackendService.token;
        var groupName = this.group.name;
        var groupDescription = this.group.description;
        var groupDomainname = this.group.domainname;
        var groupPrivacy = this.group.privacy;
        var groupAdmins = this.group.admins;
        this.firebaseService.addGroup(groupName, groupDescription, groupDomainname, groupPrivacy, groupAdmins).then(function (message) {
            _this.name = "";
            _this.description = "";
            _this.domainname = "";
            _this.privacy = "";
            alert(message);
        });
        console.log("GOT HEREE < ------------- ");
        console.log(this.group);
        console.log("GOT HEREE 22 < ------------- ");
        console.log(JSON.stringify(this.group));
        console.log("GOT HEREE 333 < ------------- ");
        firebase.getCurrentUser().then(function (user) {
            console.log(JSON.stringify("sageee uid --> " + user.uid + " - email --> " + user.email));
            alert("User uid from FB: " + user.uid);
        }, function (error) {
            alert("Trouble in paradise: " + error);
        });
        console.log("GOT HEREE 4444 < ------------- ");
        console.log("GOT HEREE 55555 < ------------- ");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW92ZUFMQ3JlYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1vdmVBTENyZWF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0Q7QUFHaEQsd0NBQTREO0FBRTVELG9DQUFnQztBQUNoQyxtRkFBK0U7QUFDL0UsMENBQXVDO0FBQ3ZDLGlFQUFrRjtBQUNsRix1REFBMEQ7QUFTMUQsSUFBYSxxQkFBcUI7SUFzQmhDLCtCQUFvQixnQkFBa0MsRUFDNUMsZUFBZ0MsRUFDaEMsTUFBYztRQUZKLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDNUMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFYakIsU0FBSSxHQUFvQiwwQkFBMEIsQ0FBQztRQUVuRCxhQUFRLEdBQWdCLFNBQVMsQ0FBQztJQVVwQyxDQUFDO0lBRVIsd0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQVEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4RCxJQUFJLENBQUMsT0FBTyxHQUFRLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDMUQsSUFBSSxDQUFDLFFBQVEsR0FBUSxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXpELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxrQ0FBUyxFQUFVLENBQUM7UUFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUMsRUFBRyxFQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLDRCQUE0QixFQUFDLENBQUMsQ0FBQztJQUN4SCxDQUFDO0lBRVUsd0NBQVEsR0FBZixVQUFnQixJQUFtQztRQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLDJDQUF5QyxJQUFJLENB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QUN4QixlQUFNO0dBeEJiLHFCQUFxQixDQXVIakM7QUF2SFksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQge0JhY2tlbmRTZXJ2aWNlLCBGaXJlYmFzZVNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlc1wiO1xuaW1wb3J0IHtHaWZ0fSBmcm9tIFwiLi4vbW9kZWxzXCI7XG5pbXBvcnQge0dyb3VwfSBmcm9tIFwiLi4vbW9kZWxzXCI7XG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlci9yb3V0ZXItZXh0ZW5zaW9ucyc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhLCBWYWx1ZUxpc3QgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWRyb3AtZG93blwiO1xuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7IFxuXG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogXCJhbC1tb3ZlQUxDcmVhdGVcIixcbiAgdGVtcGxhdGVVcmw6IFwibW92ZUFMQ3JlYXRlLmh0bWxcIlxufSlcblxuZXhwb3J0IGNsYXNzIE1vdmVBTENyZWF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgZGF0ZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBkb21haW5uYW1lOiBzdHJpbmc7XG4gIG1lbWJlcnM6IHN0cmluZztcbiAgYWRtaW5zOiBzdHJpbmc7XG4gIFVJRDogc3RyaW5nO1xuICBwdWJsaWMgZ2lmdDogR2lmdDtcbiAgcHVibGljIGdyb3VwOiBHcm91cDtcblxuICBwdWJsaWMgcHJpdmFjeTogc3RyaW5nO1xuICBwdWJsaWMgaGludCAgICAgICAgICAgICAgICAgID0gXCJDaG9vc2UgR3JvdXAgcGVybWlzc2lvbnNcIjtcbiAgcHVibGljIGl0ZW1zOiBWYWx1ZUxpc3Q8c3RyaW5nPjtcbiAgcHVibGljIGNzc0NsYXNzOiBzdHJpbmcgICAgICA9IFwiZGVmYXVsdFwiO1xuXG5cbiAgcHVibGljIGdpZnRzJDogT2JzZXJ2YWJsZTxhbnk+O1xuICBwdWJsaWMgZ3JvdXBzJDogT2JzZXJ2YWJsZTxhbnk+O1xuICBwdWJsaWMgbWVzc2FnZSQ6IE9ic2VydmFibGU8YW55PjtcbiAgXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICBwcml2YXRlIGZpcmViYXNlU2VydmljZTogRmlyZWJhc2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcbiAgICApIHt9XG5cbm5nT25Jbml0KCl7XG4gIHRoaXMuZ2lmdHMkID0gPGFueT50aGlzLmZpcmViYXNlU2VydmljZS5nZXRNeVdpc2hMaXN0KCk7XG4gIHRoaXMuZ3JvdXBzJCA9IDxhbnk+dGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0TXlHcm91cExpc3QoKTtcbiAgdGhpcy5tZXNzYWdlJCA9IDxhbnk+dGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0TXlNZXNzYWdlKCk7XG5cbiAgdGhpcy5pdGVtcyA9IG5ldyBWYWx1ZUxpc3Q8c3RyaW5nPigpO1xuICB0aGlzLml0ZW1zLnB1c2goe3ZhbHVlOiBgb3BlbmAsIGRpc3BsYXk6IGBPUEVOIHRvIHdvcmxkYH0gLCB7dmFsdWU6IGBjbG9zZWRgLCBkaXNwbGF5OiBgQ0xPU0VEIC0gaW52aXRlIG9ubHkgZ3JvdXBgfSk7XG59XG5cbiAgICBwdWJsaWMgb25jaGFuZ2UoYXJnczogU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coYERyb3AgRG93biBzZWxlY3RlZCBpbmRleCBjaGFuZ2VkIGZyb20gJHthcmdzLm9sZEluZGV4fSB0byAke2FyZ3MubmV3SW5kZXh9LiBOZXcgdmFsdWUgaXMgXCIke3RoaXMuaXRlbXMuZ2V0VmFsdWUoXG4gICAgICAgICAgICBhcmdzLm5ld0luZGV4KX1cImApO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbm9wZW4oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRHJvcCBEb3duIG9wZW5lZC5cIik7XG4gICAgfVxuXG4gICAgcHVibGljIG9uY2xvc2UoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRHJvcCBEb3duIGNsb3NlZC5cIik7XG4gICAgfVxuXG4gICAgcHVibGljIGNoYW5nZVN0eWxlcygpIHtcbiAgICAgICAgdGhpcy5jc3NDbGFzcyA9IFwiY2hhbmdlZC1zdHlsZXNcIjtcbiAgICB9XG5cblxuXG4gIGFkZEdyb3VwKCkge1xuICAgICB0aGlzLmdyb3VwID0gbmV3IEdyb3VwKFxuICAgICAgdGhpcy5pZCxcbiAgICAgIHRoaXMubmFtZSxcbiAgICAgIHRoaXMuZGF0ZSxcbiAgICAgIHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICB0aGlzLmRvbWFpbm5hbWUsXG4gICAgICB0aGlzLnByaXZhY3ksXG4gICAgICB0aGlzLm1lbWJlcnMsXG4gICAgICB0aGlzLmFkbWlucyxcbiAgICAgIHRoaXMuVUlEKSBcbiAgICB0aGlzLmdyb3VwLmFkbWlucyA9IEJhY2tlbmRTZXJ2aWNlLnRva2VuO1xuICAgIGxldCBncm91cE5hbWU6c3RyaW5nID0gdGhpcy5ncm91cC5uYW1lO1xuICAgIGxldCBncm91cERlc2NyaXB0aW9uOnN0cmluZyA9IHRoaXMuZ3JvdXAuZGVzY3JpcHRpb247XG4gICAgbGV0IGdyb3VwRG9tYWlubmFtZTpzdHJpbmcgPSB0aGlzLmdyb3VwLmRvbWFpbm5hbWU7XG4gICAgbGV0IGdyb3VwUHJpdmFjeTpzdHJpbmcgPSB0aGlzLmdyb3VwLnByaXZhY3k7XG4gICAgbGV0IGdyb3VwQWRtaW5zOnN0cmluZyA9IHRoaXMuZ3JvdXAuYWRtaW5zO1xuICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmFkZEdyb3VwKGdyb3VwTmFtZSxncm91cERlc2NyaXB0aW9uLGdyb3VwRG9tYWlubmFtZSxncm91cFByaXZhY3ksZ3JvdXBBZG1pbnMpLnRoZW4oKG1lc3NhZ2U6YW55KSA9PiB7XG4gICAgICB0aGlzLm5hbWUgPSBcIlwiO1xuICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiXCI7XG4gICAgICB0aGlzLmRvbWFpbm5hbWUgPSBcIlwiO1xuICAgICAgdGhpcy5wcml2YWN5ID0gXCJcIjtcbiAgICAgIGFsZXJ0KG1lc3NhZ2UpO1xuICAgICAgfSlcbiAgICBjb25zb2xlLmxvZyhcIkdPVCBIRVJFRSA8IC0tLS0tLS0tLS0tLS0gXCIpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZ3JvdXApO1xuICAgIGNvbnNvbGUubG9nKFwiR09UIEhFUkVFIDIyIDwgLS0tLS0tLS0tLS0tLSBcIik7XG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5ncm91cCkpO1xuICAgIGNvbnNvbGUubG9nKFwiR09UIEhFUkVFIDMzMyA8IC0tLS0tLS0tLS0tLS0gXCIpO1xuICAgIGZpcmViYXNlLmdldEN1cnJlbnRVc2VyKCkudGhlbih1c2VyID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KFwic2FnZWVlIHVpZCAtLT4gXCIgKyB1c2VyLnVpZCArIFwiIC0gZW1haWwgLS0+IFwiICsgdXNlci5lbWFpbCkpO1xuICAgICAgYWxlcnQoXCJVc2VyIHVpZCBmcm9tIEZCOiBcIiArIHVzZXIudWlkKTtcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgYWxlcnQoXCJUcm91YmxlIGluIHBhcmFkaXNlOiBcIiArIGVycm9yKTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhcIkdPVCBIRVJFRSA0NDQ0IDwgLS0tLS0tLS0tLS0tLSBcIik7XG4gICAgY29uc29sZS5sb2coXCJHT1QgSEVSRUUgNTU1NTUgPCAtLS0tLS0tLS0tLS0tIFwiKTtcblxuXG4gIH1cblxuICBkZWxldGUoZ2lmdDogR2lmdCkge1xuICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmRlbGV0ZShnaWZ0KVxuICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgIGFsZXJ0KFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgZGVsZXRpbmcgYW4gaXRlbSBmcm9tIHlvdXIgbGlzdC5cIik7XG4gICAgICB9KTtcbiAgfVxuXG4gIGdvVG9Nb3ZlQUwoKXtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL21vdmVBTFwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSApO1xuICB9XG5cbiAgZ29Ub01hcE5vd0FMKCl7XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9cIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0gKTtcbiAgfVxuXG4gIGdvVG9Nb3ZlQUxDcmVhdGUoKXtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL21vdmVBTENyZWF0ZVwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSApO1xuICB9XG5cbiAgbG9nb3V0KCkge1xuICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmxvZ291dCgpO1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvbG9naW5cIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0gKTtcbiAgfVxufVxuXG4iXX0=