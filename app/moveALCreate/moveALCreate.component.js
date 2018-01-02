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
        this.group.members = services_1.BackendService.token;
        var groupAdmins = this.group.admins;
        var groupMembers = this.group.members;
        var groupName = this.group.name;
        var groupDescription = this.group.description;
        var groupDomainname = this.group.domainname;
        var groupPrivacy = "open";
        this.privacy = "oPenNOTUSED-setThisPrviacy";
        this.firebaseService.addGroup(groupName, groupDescription, groupDomainname, groupPrivacy, groupAdmins, groupMembers).then(function (message) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW92ZUFMQ3JlYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1vdmVBTENyZWF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0Q7QUFHaEQsd0NBQTREO0FBRTVELG9DQUFnQztBQUNoQyxtRkFBK0U7QUFDL0UsMENBQXVDO0FBQ3ZDLGlFQUFrRjtBQUNsRix1REFBMEQ7QUFTMUQsSUFBYSxxQkFBcUI7SUFzQmhDLCtCQUFvQixnQkFBa0MsRUFDNUMsZUFBZ0MsRUFDaEMsTUFBYztRQUZKLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDNUMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFYakIsU0FBSSxHQUFvQiwwQkFBMEIsQ0FBQztRQUVuRCxhQUFRLEdBQWdCLFNBQVMsQ0FBQztJQVVwQyxDQUFDO0lBRVIsd0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQVEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4RCxJQUFJLENBQUMsT0FBTyxHQUFRLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDMUQsSUFBSSxDQUFDLFFBQVEsR0FBUSxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3pELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxrQ0FBUyxFQUFVLENBQUM7UUFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUMsRUFBRSxFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBQyxFQUFHLEVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUMsQ0FBQyxDQUFDO0lBQ2xLLENBQUM7SUFFUSx3Q0FBUSxHQUFmLFVB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RSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBRSxDQUFDO0lBQzdFLENBQUM7SUFFRCxzQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUUsQ0FBQztJQUN0RSxDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQUFDLEFBNUhELElBNEhDO0FBNUhZLHFCQUFxQjtJQU5qQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxpQkFBaUI7UUFDM0IsV0FBVyxFQUFFLG1CQUFtQjtLQUNqQyxDQUFDO3FDQXdCc0Msb0NBQWdCO1FBQzNCLDBCQUFlO1FBQ3hCLGVBQU07R0F4QmIscUJBQXFCLENBNEhqQztBQTVIWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7QmFja2VuZFNlcnZpY2UsIEZpcmViYXNlU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzXCI7XG5pbXBvcnQge0dpZnR9IGZyb20gXCIuLi9tb2RlbHNcIjtcbmltcG9ydCB7R3JvdXB9IGZyb20gXCIuLi9tb2RlbHNcIjtcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyL3JvdXRlci1leHRlbnNpb25zJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEsIFZhbHVlTGlzdCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZHJvcC1kb3duXCI7XG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTsgXG5cblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiBcImFsLW1vdmVBTENyZWF0ZVwiLFxuICB0ZW1wbGF0ZVVybDogXCJtb3ZlQUxDcmVhdGUuaHRtbFwiXG59KVxuXG5leHBvcnQgY2xhc3MgTW92ZUFMQ3JlYXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBkYXRlSW5NaWxsaXNlY29uZHM6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgZG9tYWlubmFtZTogc3RyaW5nO1xuICBtZW1iZXJzOiBzdHJpbmc7XG4gIGFkbWluczogc3RyaW5nO1xuICBVSUQ6IHN0cmluZztcbiAgcHVibGljIGdpZnQ6IEdpZnQ7XG4gIHB1YmxpYyBncm91cDogR3JvdXA7XG5cbiAgcHVibGljIHByaXZhY3k6IHN0cmluZztcbiAgcHVibGljIGhpbnQgICAgICAgICAgICAgICAgICA9IFwiQ2hvb3NlIEdyb3VwIHBlcm1pc3Npb25zXCI7XG4gIHB1YmxpYyBpdGVtczogVmFsdWVMaXN0PHN0cmluZz47XG4gIHB1YmxpYyBjc3NDbGFzczogc3RyaW5nICAgICAgPSBcImRlZmF1bHRcIjtcblxuXG4gIHB1YmxpYyBnaWZ0cyQ6IE9ic2VydmFibGU8YW55PjtcbiAgcHVibGljIGdyb3VwcyQ6IE9ic2VydmFibGU8YW55PjtcbiAgcHVibGljIG1lc3NhZ2UkOiBPYnNlcnZhYmxlPGFueT47XG4gIFxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgcHJpdmF0ZSBmaXJlYmFzZVNlcnZpY2U6IEZpcmViYXNlU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXG4gICAgKSB7fVxuXG5uZ09uSW5pdCgpe1xuICB0aGlzLmdpZnRzJCA9IDxhbnk+dGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0TXlXaXNoTGlzdCgpO1xuICB0aGlzLmdyb3VwcyQgPSA8YW55PnRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldE15R3JvdXBMaXN0KCk7XG4gIHRoaXMubWVzc2FnZSQgPSA8YW55PnRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldE15TWVzc2FnZSgpO1xuICB0aGlzLml0ZW1zID0gbmV3IFZhbHVlTGlzdDxzdHJpbmc+KCk7XG4gIHRoaXMuaXRlbXMucHVzaCh7dmFsdWU6ICdub3RTZXQnLCBkaXNwbGF5OiAnU0VUIHByaXZhY3knfSwge3ZhbHVlOiBgb3BlbjFgLCBkaXNwbGF5OiBgT1BFTiB0byB3b3JsZGB9ICwge3ZhbHVlOiBgY2xvc2VkYCwgZGlzcGxheTogYENMT1NFRCAtIGludml0ZSBvbmx5IGdyb3VwYH0pO1xuICB9XG5cbiAgICBwdWJsaWMgb25jaGFuZ2UoYXJnczogU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coYERyb3AgRG93biBzZWxlY3RlZCBpbmRleCBjaGFuZ2VkIGZyb20gJHthcmdzLm9sZEluZGV4fSB0byAke2FyZ3MubmV3SW5kZXh9LiBOZXcgdmFsdWUgaXMgXCIke3RoaXMuaXRlbXMuZ2V0VmFsdWUoXG4gICAgICAgICAgICBhcmdzLm5ld0luZGV4KX1cImApO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbm9wZW4oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRHJvcCBEb3duIG9wZW5lZC5cIik7XG4gICAgfVxuXG4gICAgcHVibGljIG9uY2xvc2UoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRHJvcCBEb3duIGNsb3NlZC5cIik7XG4gICAgfVxuXG4gICAgcHVibGljIGNoYW5nZVN0eWxlcygpIHtcbiAgICAgICAgdGhpcy5jc3NDbGFzcyA9IFwiY2hhbmdlZC1zdHlsZXNcIjtcbiAgICB9XG5cblxuXG4gIGFkZEdyb3VwKCkge1xuICAgICB0aGlzLmdyb3VwID0gbmV3IEdyb3VwKFxuICAgICAgdGhpcy5pZCxcbiAgICAgIHRoaXMubmFtZSxcbiAgICAgIHRoaXMuZGF0ZUluTWlsbGlzZWNvbmRzLFxuICAgICAgdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgIHRoaXMuZG9tYWlubmFtZSxcbiAgICAgIHRoaXMucHJpdmFjeSxcbiAgICAgIHRoaXMubWVtYmVycyxcbiAgICAgIHRoaXMuYWRtaW5zLFxuICAgICAgdGhpcy5VSUQpIFxuICAgIHRoaXMuZ3JvdXAuYWRtaW5zID0gQmFja2VuZFNlcnZpY2UudG9rZW47XG4gICAgdGhpcy5ncm91cC5tZW1iZXJzID0gQmFja2VuZFNlcnZpY2UudG9rZW47XG4gICAgbGV0IGdyb3VwQWRtaW5zOnN0cmluZyA9IHRoaXMuZ3JvdXAuYWRtaW5zO1xuICAgIGxldCBncm91cE1lbWJlcnM6c3RyaW5nID0gdGhpcy5ncm91cC5tZW1iZXJzO1xuICAgIGxldCBncm91cE5hbWU6c3RyaW5nID0gdGhpcy5ncm91cC5uYW1lO1xuICAgIGxldCBncm91cERlc2NyaXB0aW9uOnN0cmluZyA9IHRoaXMuZ3JvdXAuZGVzY3JpcHRpb247XG4gICAgbGV0IGdyb3VwRG9tYWlubmFtZTpzdHJpbmcgPSB0aGlzLmdyb3VwLmRvbWFpbm5hbWU7XG4gICAgbGV0IGdyb3VwUHJpdmFjeSA9IFwib3BlblwiO1xuICAgIHRoaXMucHJpdmFjeSA9IFwib1Blbk5PVFVTRUQtc2V0VGhpc1BydmlhY3lcIjtcbiAgICB0aGlzLmZpcmViYXNlU2VydmljZS5hZGRHcm91cChncm91cE5hbWUsZ3JvdXBEZXNjcmlwdGlvbixncm91cERvbWFpbm5hbWUsZ3JvdXBQcml2YWN5LGdyb3VwQWRtaW5zLGdyb3VwTWVtYmVycykudGhlbigobWVzc2FnZTphbnkpID0+IHtcbiAgICAgIHRoaXMubmFtZSA9IFwiXCI7XG4gICAgICB0aGlzLmRlc2NyaXB0aW9uID0gXCJcIjtcbiAgICAgIHRoaXMuZG9tYWlubmFtZSA9IFwiXCI7XG4gICAgICB0aGlzLnByaXZhY3kgPSBcIm9QZW5GSVgtSW5BZGRHcm91cENhbGxcIjtcbiAgICAgIGFsZXJ0KG1lc3NhZ2UpO1xuICAgICAgfSlcbiAgICBjb25zb2xlLmxvZyhcIkdPVCBIRVJFRSA8IC0tLS0tLS0tLS0tLS0gXCIpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZ3JvdXApO1xuICAgIGNvbnNvbGUubG9nKFwiR09UIEhFUkVFIDIyIDwgLS0tLS0tLS0tLS0tLSBcIik7XG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5ncm91cCkpO1xuICAgIGNvbnNvbGUubG9nKFwiR09UIEhFUkVFIDMzMyA8IC0tLS0tLS0tLS0tLS0gXCIpO1xuICAgIGZpcmViYXNlLmdldEN1cnJlbnRVc2VyKCkudGhlbih1c2VyID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KFwic2FnZWVlIHVpZCAtLT4gXCIgKyB1c2VyLnVpZCArIFwiIC0gZW1haWwgLS0+IFwiICsgdXNlci5lbWFpbCkpO1xuICAgICAgYWxlcnQoXCJVc2VyIHVpZCBmcm9tIEZCOiBcIiArIHVzZXIudWlkKTtcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgYWxlcnQoXCJUcm91YmxlIGluIHBhcmFkaXNlOiBcIiArIGVycm9yKTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhcIkdPVCBIRVJFRSA0NDQ0IDwgLS0tLS0tLS0tLS0tLSBcIik7XG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5wcml2YWN5KSk7XG4gICAgY29uc29sZS5sb2coXCJHT1QgSEVSRUUgNTU1NTUgPCAtLS0tLS0tLS0tLS0tIFwiKTtcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnByaXZhY3kpKTtcbiAgICBjb25zb2xlLmxvZyhcIkdPVCBIRVJFRSA2NjY2NjYgPCAtLS0tLS0tLS0tLS0tIFwiKTtcblxuXG4gIH1cblxuICBkZWxldGUoZ2lmdDogR2lmdCkge1xuICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmRlbGV0ZShnaWZ0KVxuICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgIGFsZXJ0KFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgZGVsZXRpbmcgYW4gaXRlbSBmcm9tIHlvdXIgbGlzdC5cIik7XG4gICAgICB9KTtcbiAgfVxuXG4gIGdvVG9Nb3ZlQUwoKXtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL21vdmVBTFwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSApO1xuICB9XG5cbiAgZ29Ub01hcE5vd0FMKCl7XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9cIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0gKTtcbiAgfVxuXG4gIGdvVG9Nb3ZlQUxDcmVhdGUoKXtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL21vdmVBTENyZWF0ZVwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSApO1xuICB9XG5cbiAgbG9nb3V0KCkge1xuICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmxvZ291dCgpO1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvbG9naW5cIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0gKTtcbiAgfVxufVxuXG4iXX0=