"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var services_1 = require("../services");
var models_1 = require("../models");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var router_1 = require("@angular/router");
var EatALComponent = (function () {
    function EatALComponent(routerExtensions, firebaseService, router) {
        this.routerExtensions = routerExtensions;
        this.firebaseService = firebaseService;
        this.router = router;
    }
    EatALComponent.prototype.ngOnInit = function () {
        this.gifts$ = this.firebaseService.getMyWishList();
        this.message$ = this.firebaseService.getMyMessage();
    };
    EatALComponent.prototype.add = function () {
        var _this = this;
        this.gift = new models_1.Gift(this.id, this.name, this.date, this.description, this.imagepath, this.UID);
        var myGift = this.gift.name;
        this.firebaseService.add(myGift).then(function (message) {
            _this.name = "";
            alert(message);
        });
    };
    EatALComponent.prototype.delete = function (gift) {
        this.firebaseService.delete(gift)
            .catch(function () {
            alert("An error occurred while deleting an item from your list.");
        });
    };
    EatALComponent.prototype.goToMoveAL = function () {
        this.routerExtensions.navigate(["/moveAL"], { clearHistory: true });
    };
    EatALComponent.prototype.goToMapNowAL = function () {
        this.routerExtensions.navigate(["/"], { clearHistory: true });
    };
    EatALComponent.prototype.logout = function () {
        this.firebaseService.logout();
        this.routerExtensions.navigate(["/login"], { clearHistory: true });
    };
    return EatALComponent;
}());
EatALComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "gf-eatAL",
        templateUrl: "eatAL.html"
    }),
    __metadata("design:paramtypes", [router_extensions_1.RouterExtensions,
        services_1.FirebaseService,
        router_1.Router])
], EatALComponent);
exports.EatALComponent = EatALComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWF0QUwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZWF0QUwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWdEO0FBR2hELHdDQUE0RDtBQUM1RCxvQ0FBK0I7QUFDL0IsbUZBQStFO0FBQy9FLDBDQUF1QztBQU92QyxJQUFhLGNBQWM7SUFhekIsd0JBQW9CLGdCQUFrQyxFQUM1QyxlQUFnQyxFQUNoQyxNQUFjO1FBRkoscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUM1QyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUNuQixDQUFDO0lBRVIsaUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQVEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4RCxJQUFJLENBQUMsUUFBUSxHQUFRLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDM0QsQ0FBQztJQUVDLDRCQUFHLEdBQUg7UUFBQSxpQkFjQztRQWJFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxhQUFJLENBQ25CLElBQUksQ0FBQyxFQUFFLEVBQ1AsSUFBSSxDQUFDLElBQUksRUFDVCxJQUFJLENBQUMsSUFBSSxFQUNULElBQUksQ0FBQyxXQUFXLEVBQ2hCLElBQUksQ0FBQyxTQUFTLEVBQ2QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ1gsSUFBSSxNQUFNLEdBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDbkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsT0FBVztZQUNoRCxLQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNmLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQTtJQUVKLENBQUM7SUFFRCwrQkFBTSxHQUFOLFVBQU8sSUFBVTtRQUNmLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzthQUM5QixLQUFLLENBQUM7WUFDTCxLQUFLLENBQUMsMERBQTBELENBQUMsQ0FBQztRQUNwRSxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxtQ0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFFLENBQUM7SUFDdkUsQ0FBQztJQUVELHFDQUFZLEdBQVo7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUUsQ0FBQztJQUNqRSxDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFFLENBQUM7SUFDdEUsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQTFERCxJQTBEQztBQTFEWSxjQUFjO0lBTDFCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsV0FBVyxFQUFFLFlBQVk7S0FDMUIsQ0FBQztxQ0Fjc0Msb0NBQWdCO1FBQzNCLDBCQUFlO1FBQ3hCLGVBQU07R0FmYixjQUFjLENBMEQxQjtBQTFEWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHtCYWNrZW5kU2VydmljZSwgRmlyZWJhc2VTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXNcIjtcbmltcG9ydCB7R2lmdH0gZnJvbSBcIi4uL21vZGVsc1wiO1xuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXIvcm91dGVyLWV4dGVuc2lvbnMnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogXCJnZi1lYXRBTFwiLFxuICB0ZW1wbGF0ZVVybDogXCJlYXRBTC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgRWF0QUxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgZGF0ZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBpbWFnZXBhdGg6IHN0cmluZztcbiAgVUlEOiBzdHJpbmc7XG4gIHB1YmxpYyBnaWZ0OiBHaWZ0O1xuXG4gIHB1YmxpYyBnaWZ0cyQ6IE9ic2VydmFibGU8YW55PjtcbiAgcHVibGljIG1lc3NhZ2UkOiBPYnNlcnZhYmxlPGFueT47XG4gIFxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgcHJpdmF0ZSBmaXJlYmFzZVNlcnZpY2U6IEZpcmViYXNlU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXG4gICAgKSB7fVxuXG5uZ09uSW5pdCgpe1xuICB0aGlzLmdpZnRzJCA9IDxhbnk+dGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0TXlXaXNoTGlzdCgpO1xuICB0aGlzLm1lc3NhZ2UkID0gPGFueT50aGlzLmZpcmViYXNlU2VydmljZS5nZXRNeU1lc3NhZ2UoKTtcbn1cblxuICBhZGQoKSB7XG4gICAgIHRoaXMuZ2lmdCA9IG5ldyBHaWZ0KFxuICAgICAgdGhpcy5pZCxcbiAgICAgIHRoaXMubmFtZSxcbiAgICAgIHRoaXMuZGF0ZSxcbiAgICAgIHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICB0aGlzLmltYWdlcGF0aCxcbiAgICAgIHRoaXMuVUlEKVxuICAgIGxldCBteUdpZnQ6c3RyaW5nID0gdGhpcy5naWZ0Lm5hbWU7XG4gICAgdGhpcy5maXJlYmFzZVNlcnZpY2UuYWRkKG15R2lmdCkudGhlbigobWVzc2FnZTphbnkpID0+IHtcbiAgICAgIHRoaXMubmFtZSA9IFwiXCI7XG4gICAgICBhbGVydChtZXNzYWdlKTtcbiAgICB9KSAgIFxuICAgIFxuICB9XG5cbiAgZGVsZXRlKGdpZnQ6IEdpZnQpIHtcbiAgICB0aGlzLmZpcmViYXNlU2VydmljZS5kZWxldGUoZ2lmdClcbiAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgIGFsZXJ0KFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgZGVsZXRpbmcgYW4gaXRlbSBmcm9tIHlvdXIgbGlzdC5cIik7XG4gICAgICB9KTtcbiAgfVxuXG4gIGdvVG9Nb3ZlQUwoKXtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL21vdmVBTFwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSApO1xuICB9XG5cbiAgZ29Ub01hcE5vd0FMKCl7XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9cIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0gKTtcbiAgfVxuXG4gIGxvZ291dCgpIHtcbiAgICB0aGlzLmZpcmViYXNlU2VydmljZS5sb2dvdXQoKTtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2xvZ2luXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9ICk7XG4gIH1cbn1cblxuIl19