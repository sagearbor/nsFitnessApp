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
        this.items.push({ value: 'notSet', display: 'SET privacy' }, { value: "open1", display: "OPEN to world" }, { value: "closed", display: "CLOSED - invite only group" });
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
        this.group = new models_1.Group(this.id, this.name, this.dateInMilliseconds, this.description, this.domainname, this.privacy, this.members, this.admins, this.UID);
        this.group.admins = services_1.BackendService.token;
        var groupName = this.group.name;
        var groupDescription = this.group.description;
        var groupDomainname = this.group.domainname;
        var groupPrivacy = this.group.privacy;
        groupPrivacy = "open";
        this.privacy = "oPenNOTUSED-setThisPrviacy";
        var groupAdmins = this.group.admins;
        this.firebaseService.addGroup(groupName, groupDescription, groupDomainname, groupPrivacy, groupAdmins).then(function (message) {
            _this.name = "";
            _this.description = "";
            _this.domainname = "";
            _this.privacy = "oPenFIX-InAddGroupCall";
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
        console.log(JSON.stringify(this.privacy));
        console.log("GOT HEREE 55555 < ------------- ");
        console.log(JSON.stringify(this.privacy));
        console.log("GOT HEREE 666666 < ------------- ");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW92ZUFMQ3JlYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1vdmVBTENyZWF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0Q7QUFHaEQsd0NBQTREO0FBRTVELG9DQUFnQztBQUNoQyxtRkFBK0U7QUFDL0UsMENBQXVDO0FBQ3ZDLGlFQUFrRjtBQUNsRix1REFBMEQ7QUFTMUQsSUFBYSxxQkFBcUI7SUFzQmhDLCtCQUFvQixnQkFBa0MsRUFDNUMsZUFBZ0MsRUFDaEMsTUFBYztRQUZKLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDNUMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFYakIsU0FBSSxHQUFvQiwwQkFBMEIsQ0FBQztRQUVuRCxhQUFRLEdBQWdCLFNBQVMsQ0FBQztJQVVwQyxDQUFDO0lBRVIsd0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQVEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4RCxJQUFJLENBQUMsT0FBTyxHQUFRLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDMUQsSUFBSSxDQUFDLFFBQVEsR0FBUSxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3pELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxrQ0FBUyxFQUFVLENBQUM7UUFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUMsRUFBRSxFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBQyxFQUFHLEVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUMsQ0FBQyxDQUFDO0lBQ2xLLENBQUM7SUFFUSx3Q0FBUSxHQUFmLFVB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SSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUUsQ0FBQztJQUN0RSxDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQUFDLEFBM0hELElBMkhDO0FBM0hZLHFCQUFxQjtJQU5qQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxpQkFBaUI7UUFDM0IsV0FBVyxFQUFFLG1CQUFtQjtLQUNqQyxDQUFDO3FDQXdCc0Msb0NBQWdCO1FBQzNCLDBCQUFlO1FBQ3hCLGVBQU07R0F4QmIscUJBQXFCLENBMkhqQztBQTNIWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7QmFja2VuZFNlcnZpY2UsIEZpcmViYXNlU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzXCI7XG5pbXBvcnQge0dpZnR9IGZyb20gXCIuLi9tb2RlbHNcIjtcbmltcG9ydCB7R3JvdXB9IGZyb20gXCIuLi9tb2RlbHNcIjtcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyL3JvdXRlci1leHRlbnNpb25zJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEsIFZhbHVlTGlzdCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZHJvcC1kb3duXCI7XG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTsgXG5cblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiBcImFsLW1vdmVBTENyZWF0ZVwiLFxuICB0ZW1wbGF0ZVVybDogXCJtb3ZlQUxDcmVhdGUuaHRtbFwiXG59KVxuXG5leHBvcnQgY2xhc3MgTW92ZUFMQ3JlYXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBkYXRlSW5NaWxsaXNlY29uZHM6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgZG9tYWlubmFtZTogc3RyaW5nO1xuICBtZW1iZXJzOiBzdHJpbmc7XG4gIGFkbWluczogc3RyaW5nO1xuICBVSUQ6IHN0cmluZztcbiAgcHVibGljIGdpZnQ6IEdpZnQ7XG4gIHB1YmxpYyBncm91cDogR3JvdXA7XG5cbiAgcHVibGljIHByaXZhY3k6IHN0cmluZztcbiAgcHVibGljIGhpbnQgICAgICAgICAgICAgICAgICA9IFwiQ2hvb3NlIEdyb3VwIHBlcm1pc3Npb25zXCI7XG4gIHB1YmxpYyBpdGVtczogVmFsdWVMaXN0PHN0cmluZz47XG4gIHB1YmxpYyBjc3NDbGFzczogc3RyaW5nICAgICAgPSBcImRlZmF1bHRcIjtcblxuXG4gIHB1YmxpYyBnaWZ0cyQ6IE9ic2VydmFibGU8YW55PjtcbiAgcHVibGljIGdyb3VwcyQ6IE9ic2VydmFibGU8YW55PjtcbiAgcHVibGljIG1lc3NhZ2UkOiBPYnNlcnZhYmxlPGFueT47XG4gIFxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgcHJpdmF0ZSBmaXJlYmFzZVNlcnZpY2U6IEZpcmViYXNlU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXG4gICAgKSB7fVxuXG5uZ09uSW5pdCgpe1xuICB0aGlzLmdpZnRzJCA9IDxhbnk+dGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0TXlXaXNoTGlzdCgpO1xuICB0aGlzLmdyb3VwcyQgPSA8YW55PnRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldE15R3JvdXBMaXN0KCk7XG4gIHRoaXMubWVzc2FnZSQgPSA8YW55PnRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldE15TWVzc2FnZSgpO1xuICB0aGlzLml0ZW1zID0gbmV3IFZhbHVlTGlzdDxzdHJpbmc+KCk7XG4gIHRoaXMuaXRlbXMucHVzaCh7dmFsdWU6ICdub3RTZXQnLCBkaXNwbGF5OiAnU0VUIHByaXZhY3knfSwge3ZhbHVlOiBgb3BlbjFgLCBkaXNwbGF5OiBgT1BFTiB0byB3b3JsZGB9ICwge3ZhbHVlOiBgY2xvc2VkYCwgZGlzcGxheTogYENMT1NFRCAtIGludml0ZSBvbmx5IGdyb3VwYH0pO1xuICB9XG5cbiAgICBwdWJsaWMgb25jaGFuZ2UoYXJnczogU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coYERyb3AgRG93biBzZWxlY3RlZCBpbmRleCBjaGFuZ2VkIGZyb20gJHthcmdzLm9sZEluZGV4fSB0byAke2FyZ3MubmV3SW5kZXh9LiBOZXcgdmFsdWUgaXMgXCIke3RoaXMuaXRlbXMuZ2V0VmFsdWUoXG4gICAgICAgICAgICBhcmdzLm5ld0luZGV4KX1cImApO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbm9wZW4oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRHJvcCBEb3duIG9wZW5lZC5cIik7XG4gICAgfVxuXG4gICAgcHVibGljIG9uY2xvc2UoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRHJvcCBEb3duIGNsb3NlZC5cIik7XG4gICAgfVxuXG4gICAgcHVibGljIGNoYW5nZVN0eWxlcygpIHtcbiAgICAgICAgdGhpcy5jc3NDbGFzcyA9IFwiY2hhbmdlZC1zdHlsZXNcIjtcbiAgICB9XG5cblxuXG4gIGFkZEdyb3VwKCkge1xuICAgICB0aGlzLmdyb3VwID0gbmV3IEdyb3VwKFxuICAgICAgdGhpcy5pZCxcbiAgICAgIHRoaXMubmFtZSxcbiAgICAgIHRoaXMuZGF0ZUluTWlsbGlzZWNvbmRzLFxuICAgICAgdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgIHRoaXMuZG9tYWlubmFtZSxcbiAgICAgIHRoaXMucHJpdmFjeSxcbiAgICAgIHRoaXMubWVtYmVycyxcbiAgICAgIHRoaXMuYWRtaW5zLFxuICAgICAgdGhpcy5VSUQpIFxuICAgIHRoaXMuZ3JvdXAuYWRtaW5zID0gQmFja2VuZFNlcnZpY2UudG9rZW47XG4gICAgbGV0IGdyb3VwTmFtZTpzdHJpbmcgPSB0aGlzLmdyb3VwLm5hbWU7XG4gICAgbGV0IGdyb3VwRGVzY3JpcHRpb246c3RyaW5nID0gdGhpcy5ncm91cC5kZXNjcmlwdGlvbjtcbiAgICBsZXQgZ3JvdXBEb21haW5uYW1lOnN0cmluZyA9IHRoaXMuZ3JvdXAuZG9tYWlubmFtZTtcbiAgICBsZXQgZ3JvdXBQcml2YWN5OnN0cmluZyA9IHRoaXMuZ3JvdXAucHJpdmFjeTtcbiAgICBncm91cFByaXZhY3kgPSBcIm9wZW5cIjtcbiAgICB0aGlzLnByaXZhY3kgPSBcIm9QZW5OT1RVU0VELXNldFRoaXNQcnZpYWN5XCI7XG4gICAgbGV0IGdyb3VwQWRtaW5zOnN0cmluZyA9IHRoaXMuZ3JvdXAuYWRtaW5zO1xuICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmFkZEdyb3VwKGdyb3VwTmFtZSxncm91cERlc2NyaXB0aW9uLGdyb3VwRG9tYWlubmFtZSxncm91cFByaXZhY3ksZ3JvdXBBZG1pbnMpLnRoZW4oKG1lc3NhZ2U6YW55KSA9PiB7XG4gICAgICB0aGlzLm5hbWUgPSBcIlwiO1xuICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiXCI7XG4gICAgICB0aGlzLmRvbWFpbm5hbWUgPSBcIlwiO1xuICAgICAgdGhpcy5wcml2YWN5ID0gXCJvUGVuRklYLUluQWRkR3JvdXBDYWxsXCI7XG4gICAgICBhbGVydChtZXNzYWdlKTtcbiAgICAgIH0pXG4gICAgY29uc29sZS5sb2coXCJHT1QgSEVSRUUgPCAtLS0tLS0tLS0tLS0tIFwiKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmdyb3VwKTtcbiAgICBjb25zb2xlLmxvZyhcIkdPVCBIRVJFRSAyMiA8IC0tLS0tLS0tLS0tLS0gXCIpO1xuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMuZ3JvdXApKTtcbiAgICBjb25zb2xlLmxvZyhcIkdPVCBIRVJFRSAzMzMgPCAtLS0tLS0tLS0tLS0tIFwiKTtcbiAgICBmaXJlYmFzZS5nZXRDdXJyZW50VXNlcigpLnRoZW4odXNlciA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShcInNhZ2VlZSB1aWQgLS0+IFwiICsgdXNlci51aWQgKyBcIiAtIGVtYWlsIC0tPiBcIiArIHVzZXIuZW1haWwpKTtcbiAgICAgIGFsZXJ0KFwiVXNlciB1aWQgZnJvbSBGQjogXCIgKyB1c2VyLnVpZCk7XG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgIGFsZXJ0KFwiVHJvdWJsZSBpbiBwYXJhZGlzZTogXCIgKyBlcnJvcik7XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coXCJHT1QgSEVSRUUgNDQ0NCA8IC0tLS0tLS0tLS0tLS0gXCIpO1xuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMucHJpdmFjeSkpO1xuICAgIGNvbnNvbGUubG9nKFwiR09UIEhFUkVFIDU1NTU1IDwgLS0tLS0tLS0tLS0tLSBcIik7XG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5wcml2YWN5KSk7XG4gICAgY29uc29sZS5sb2coXCJHT1QgSEVSRUUgNjY2NjY2IDwgLS0tLS0tLS0tLS0tLSBcIik7XG5cblxuICB9XG5cbiAgZGVsZXRlKGdpZnQ6IEdpZnQpIHtcbiAgICB0aGlzLmZpcmViYXNlU2VydmljZS5kZWxldGUoZ2lmdClcbiAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICBhbGVydChcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGRlbGV0aW5nIGFuIGl0ZW0gZnJvbSB5b3VyIGxpc3QuXCIpO1xuICAgICAgfSk7XG4gIH1cblxuICBnb1RvTW92ZUFMKCl7XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9tb3ZlQUxcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0gKTtcbiAgfVxuXG4gIGdvVG9NYXBOb3dBTCgpe1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9ICk7XG4gIH1cblxuICBnb1RvTW92ZUFMQ3JlYXRlKCl7XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9tb3ZlQUxDcmVhdGVcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0gKTtcbiAgfVxuXG4gIGxvZ291dCgpIHtcbiAgICB0aGlzLmZpcmViYXNlU2VydmljZS5sb2dvdXQoKTtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2xvZ2luXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9ICk7XG4gIH1cbn1cblxuIl19