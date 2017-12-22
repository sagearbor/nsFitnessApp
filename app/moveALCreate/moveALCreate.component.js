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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW92ZUFMQ3JlYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1vdmVBTENyZWF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0Q7QUFHaEQsd0NBQTREO0FBRTVELG9DQUFnQztBQUNoQyxtRkFBK0U7QUFDL0UsMENBQXVDO0FBQ3ZDLGlFQUFrRjtBQUNsRix1REFBMEQ7QUFVMUQsSUFBYSxxQkFBcUI7SUFxQmhDLCtCQUFvQixnQkFBa0MsRUFDNUMsZUFBZ0MsRUFDaEMsTUFBYztRQUZKLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDNUMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFYakIsU0FBSSxHQUFvQiwwQkFBMEIsQ0FBQztRQUVuRCxhQUFRLEdBQWdCLFNBQVMsQ0FBQztJQVVwQyxDQUFDO0lBRVIsd0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQVEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4RCxJQUFJLENBQUMsT0FBTyxHQUFRLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDMUQsSUFBSSxDQUFDLFFBQVEsR0FBUSxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXpELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxrQ0FBUyxFQUFVLENBQUM7UUFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUMsRUFBRyxFQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLDRCQUE0QixFQUFDLENBQUMsQ0FBQztJQUN4SCxDQUFDO0lBRVUsd0NBQVEsR0FBZixVQUFnQixJQUFtQztRQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLDJDQUF5QyxJQUFJLENB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QztZQUNILEtBQUssQ0FBQywwREFBMEQsQ0FBQyxDQUFDO1FBQ3BFLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDBDQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUUsQ0FBQztJQUN2RSxDQUFDO0lBRUQsNENBQVksR0FBWjtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBRSxDQUFDO0lBQ2pFLENBQUM7SUFFRCxnREFBZ0IsR0FBaEI7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUUsQ0FBQztJQUM3RSxDQUFDO0lBRUQsc0NBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFFLENBQUM7SUFDdEUsQ0FBQztJQUNILDRCQUFDO0FBQUQsQ0FBQyxBQW5IRCxJQW1IQztBQW5IWSxxQkFBcUI7SUFOakMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsaUJBQWlCO1FBQzNCLFdBQVcsRUFBRSxtQkFBbUI7S0FDakMsQ0FBQztxQ0F1QnNDLG9DQUFnQjtRQUMzQiwwQkFBZTtRQUN4QixlQUFNO0dBdkJiLHFCQUFxQixDQW1IakM7QUFuSFksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQge0JhY2tlbmRTZXJ2aWNlLCBGaXJlYmFzZVNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlc1wiO1xuaW1wb3J0IHtHaWZ0fSBmcm9tIFwiLi4vbW9kZWxzXCI7XG5pbXBvcnQge0dyb3VwfSBmcm9tIFwiLi4vbW9kZWxzXCI7XG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlci9yb3V0ZXItZXh0ZW5zaW9ucyc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhLCBWYWx1ZUxpc3QgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWRyb3AtZG93blwiO1xuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7IFxuXG5cblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiBcImFsLW1vdmVBTENyZWF0ZVwiLFxuICB0ZW1wbGF0ZVVybDogXCJtb3ZlQUxDcmVhdGUuaHRtbFwiXG59KVxuXG5leHBvcnQgY2xhc3MgTW92ZUFMQ3JlYXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBkYXRlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGRvbWFpbm5hbWU6IHN0cmluZztcbiAgbWVtYmVyczogc3RyaW5nO1xuICBVSUQ6IHN0cmluZztcbiAgcHVibGljIGdpZnQ6IEdpZnQ7XG4gIHB1YmxpYyBncm91cDogR3JvdXA7XG5cbiAgcHVibGljIHByaXZhY3k6IHN0cmluZztcbiAgcHVibGljIGhpbnQgICAgICAgICAgICAgICAgICA9IFwiQ2hvb3NlIEdyb3VwIHBlcm1pc3Npb25zXCI7XG4gIHB1YmxpYyBpdGVtczogVmFsdWVMaXN0PHN0cmluZz47XG4gIHB1YmxpYyBjc3NDbGFzczogc3RyaW5nICAgICAgPSBcImRlZmF1bHRcIjtcblxuXG4gIHB1YmxpYyBnaWZ0cyQ6IE9ic2VydmFibGU8YW55PjtcbiAgcHVibGljIGdyb3VwcyQ6IE9ic2VydmFibGU8YW55PjtcbiAgcHVibGljIG1lc3NhZ2UkOiBPYnNlcnZhYmxlPGFueT47XG4gIFxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgcHJpdmF0ZSBmaXJlYmFzZVNlcnZpY2U6IEZpcmViYXNlU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXG4gICAgKSB7fVxuXG5uZ09uSW5pdCgpe1xuICB0aGlzLmdpZnRzJCA9IDxhbnk+dGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0TXlXaXNoTGlzdCgpO1xuICB0aGlzLmdyb3VwcyQgPSA8YW55PnRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldE15R3JvdXBMaXN0KCk7XG4gIHRoaXMubWVzc2FnZSQgPSA8YW55PnRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldE15TWVzc2FnZSgpO1xuXG4gIHRoaXMuaXRlbXMgPSBuZXcgVmFsdWVMaXN0PHN0cmluZz4oKTtcbiAgdGhpcy5pdGVtcy5wdXNoKHt2YWx1ZTogYG9wZW5gLCBkaXNwbGF5OiBgT1BFTiB0byB3b3JsZGB9ICwge3ZhbHVlOiBgY2xvc2VkYCwgZGlzcGxheTogYENMT1NFRCAtIGludml0ZSBvbmx5IGdyb3VwYH0pO1xufVxuXG4gICAgcHVibGljIG9uY2hhbmdlKGFyZ3M6IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBEcm9wIERvd24gc2VsZWN0ZWQgaW5kZXggY2hhbmdlZCBmcm9tICR7YXJncy5vbGRJbmRleH0gdG8gJHthcmdzLm5ld0luZGV4fS4gTmV3IHZhbHVlIGlzIFwiJHt0aGlzLml0ZW1zLmdldFZhbHVlKFxuICAgICAgICAgICAgYXJncy5uZXdJbmRleCl9XCJgKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25vcGVuKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkRyb3AgRG93biBvcGVuZWQuXCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbmNsb3NlKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkRyb3AgRG93biBjbG9zZWQuXCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjaGFuZ2VTdHlsZXMoKSB7XG4gICAgICAgIHRoaXMuY3NzQ2xhc3MgPSBcImNoYW5nZWQtc3R5bGVzXCI7XG4gICAgfVxuXG5cblxuICBhZGRHcm91cCgpIHtcbiAgICAgdGhpcy5ncm91cCA9IG5ldyBHcm91cChcbiAgICAgIHRoaXMuaWQsXG4gICAgICB0aGlzLm5hbWUsXG4gICAgICB0aGlzLmRhdGUsXG4gICAgICB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgdGhpcy5kb21haW5uYW1lLFxuICAgICAgdGhpcy5wcml2YWN5LFxuICAgICAgdGhpcy5tZW1iZXJzLFxuICAgICAgdGhpcy5VSUQpXG4gICAgbGV0IGdyb3VwTmFtZTpzdHJpbmcgPSB0aGlzLmdyb3VwLm5hbWU7XG4gICAgbGV0IGdyb3VwRGVzY3JpcHRpb246c3RyaW5nID0gdGhpcy5ncm91cC5kZXNjcmlwdGlvbjtcbiAgICBsZXQgZ3JvdXBEb21haW5uYW1lOnN0cmluZyA9IHRoaXMuZ3JvdXAuZG9tYWlubmFtZTtcbiAgICBsZXQgZ3JvdXBQcml2YWN5OnN0cmluZyA9IHRoaXMuZ3JvdXAucHJpdmFjeTtcbiAgICB0aGlzLmZpcmViYXNlU2VydmljZS5hZGRHcm91cChncm91cE5hbWUsZ3JvdXBEZXNjcmlwdGlvbixncm91cERvbWFpbm5hbWUsZ3JvdXBQcml2YWN5KS50aGVuKChtZXNzYWdlOmFueSkgPT4ge1xuICAgICAgdGhpcy5uYW1lID0gXCJcIjtcbiAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIlwiO1xuICAgICAgdGhpcy5kb21haW5uYW1lID0gXCJcIjtcbiAgICAgIHRoaXMucHJpdmFjeSA9IFwiXCI7XG4gICAgICBhbGVydChtZXNzYWdlKTtcbiAgICAgIH0pXG4gICAgY29uc29sZS5sb2coXCJHT1QgSEVSRUUgPCAtLS0tLS0tLS0tLS0tIFwiKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmdyb3VwKTtcbiAgICBjb25zb2xlLmxvZyhcIkdPVCBIRVJFRSAyMiA8IC0tLS0tLS0tLS0tLS0gXCIpO1xuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMuZ3JvdXApKTtcbiAgICBjb25zb2xlLmxvZyhcIkdPVCBIRVJFRSAzMzMgPCAtLS0tLS0tLS0tLS0tIFwiKTtcbiAgICBmaXJlYmFzZS5nZXRDdXJyZW50VXNlcigpLnRoZW4odXNlciA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShcInNhZ2VlZSB1aWQgLS0+IFwiICsgdXNlci51aWQgKyBcIiAtIGVtYWlsIC0tPiBcIiArIHVzZXIuZW1haWwpKTtcbiAgICAgIGFsZXJ0KFwiVXNlciB1aWQgZnJvbSBGQjogXCIgKyB1c2VyLnVpZCk7XG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgIGFsZXJ0KFwiVHJvdWJsZSBpbiBwYXJhZGlzZTogXCIgKyBlcnJvcik7XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coXCJHT1QgSEVSRUUgNDQ0NCA8IC0tLS0tLS0tLS0tLS0gXCIpO1xuICAgIGNvbnNvbGUubG9nKFwiR09UIEhFUkVFIDU1NTU1IDwgLS0tLS0tLS0tLS0tLSBcIik7XG5cblxuICB9XG5cbiAgZGVsZXRlKGdpZnQ6IEdpZnQpIHtcbiAgICB0aGlzLmZpcmViYXNlU2VydmljZS5kZWxldGUoZ2lmdClcbiAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICBhbGVydChcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGRlbGV0aW5nIGFuIGl0ZW0gZnJvbSB5b3VyIGxpc3QuXCIpO1xuICAgICAgfSk7XG4gIH1cblxuICBnb1RvTW92ZUFMKCl7XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9tb3ZlQUxcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0gKTtcbiAgfVxuXG4gIGdvVG9NYXBOb3dBTCgpe1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9ICk7XG4gIH1cblxuICBnb1RvTW92ZUFMQ3JlYXRlKCl7XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9tb3ZlQUxDcmVhdGVcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0gKTtcbiAgfVxuXG4gIGxvZ291dCgpIHtcbiAgICB0aGlzLmZpcmViYXNlU2VydmljZS5sb2dvdXQoKTtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2xvZ2luXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9ICk7XG4gIH1cbn1cblxuIl19