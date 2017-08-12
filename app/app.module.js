"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var http_1 = require("nativescript-angular/http");
var router_1 = require("nativescript-angular/router");
var app_routes_1 = require("./app.routes");
var app_component_1 = require("./app.component");
var services_1 = require("./services");
var login_module_1 = require("./login/login.module");
var list_module_1 = require("./list/list.module");
var list_detail_module_1 = require("./list-detail/list-detail.module");
var mapNow_module_1 = require("./mapNow/mapNow.module");
var eatAL_module_1 = require("./eatAL/eatAL.module");
var gameAL_module_1 = require("./gameAL/gameAL.module");
var moveAL_module_1 = require("./moveAL/moveAL.module");
var thinkAL_module_1 = require("./thinkAL/thinkAL.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        providers: [
            services_1.BackendService,
            services_1.FirebaseService,
            services_1.UtilsService,
            app_routes_1.authProviders
        ],
        imports: [
            nativescript_module_1.NativeScriptModule,
            http_1.NativeScriptHttpModule,
            router_1.NativeScriptRouterModule,
            router_1.NativeScriptRouterModule.forRoot(app_routes_1.appRoutes),
            login_module_1.LoginModule,
            mapNow_module_1.MapNowModule,
            list_module_1.ListModule,
            list_detail_module_1.ListDetailModule,
            eatAL_module_1.EatALModule,
            gameAL_module_1.GameALModule,
            moveAL_module_1.MoveALModule,
            thinkAL_module_1.ThinkALModule
        ],
        declarations: [
            app_component_1.AppComponent,
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLGtEQUFtRTtBQUNuRSxzREFBdUU7QUFFdkUsMkNBQXdEO0FBQ3hELGlEQUErQztBQUMvQyx1Q0FBMkU7QUFFM0UscURBQW1EO0FBQ25ELGtEQUFnRDtBQUNoRCx1RUFBb0U7QUFDcEUsd0RBQXNEO0FBQ3RELHFEQUFtRDtBQUNuRCx3REFBc0Q7QUFDdEQsd0RBQXNEO0FBQ3RELDJEQUF5RDtBQTZCekQsSUFBYSxTQUFTO0lBQXRCO0lBQXlCLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFBMUIsSUFBMEI7QUFBYixTQUFTO0lBMUJyQixlQUFRLENBQUM7UUFDUixTQUFTLEVBQUU7WUFDVCx5QkFBYztZQUNkLDBCQUFlO1lBQ2YsdUJBQVk7WUFDWiwwQkFBYTtTQUNkO1FBQ0QsT0FBTyxFQUFFO1lBQ1Asd0NBQWtCO1lBQ2xCLDZCQUFzQjtZQUN0QixpQ0FBd0I7WUFDeEIsaUNBQXdCLENBQUMsT0FBTyxDQUFDLHNCQUFTLENBQUM7WUFDM0MsMEJBQVc7WUFDWCw0QkFBWTtZQUNaLHdCQUFVO1lBQ1YscUNBQWdCO1lBQ2hCLDBCQUFXO1lBQ1gsNEJBQVk7WUFDWiw0QkFBWTtZQUNaLDhCQUFhO1NBQ2Q7UUFDRCxZQUFZLEVBQUU7WUFDViw0QkFBWTtTQUNmO1FBQ0QsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztLQUMxQixDQUFDO0dBQ1csU0FBUyxDQUFJO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IGF1dGhQcm92aWRlcnMsIGFwcFJvdXRlcyB9IGZyb20gXCIuL2FwcC5yb3V0ZXNcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlLCBGaXJlYmFzZVNlcnZpY2UsIFV0aWxzU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzXCI7XG5cbmltcG9ydCB7IExvZ2luTW9kdWxlIH0gZnJvbSBcIi4vbG9naW4vbG9naW4ubW9kdWxlXCI7XG5pbXBvcnQgeyBMaXN0TW9kdWxlIH0gZnJvbSBcIi4vbGlzdC9saXN0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTGlzdERldGFpbE1vZHVsZSB9IGZyb20gXCIuL2xpc3QtZGV0YWlsL2xpc3QtZGV0YWlsLm1vZHVsZVwiO1xuaW1wb3J0IHsgTWFwTm93TW9kdWxlIH0gZnJvbSBcIi4vbWFwTm93L21hcE5vdy5tb2R1bGVcIjtcbmltcG9ydCB7IEVhdEFMTW9kdWxlIH0gZnJvbSBcIi4vZWF0QUwvZWF0QUwubW9kdWxlXCI7XG5pbXBvcnQgeyBHYW1lQUxNb2R1bGUgfSBmcm9tIFwiLi9nYW1lQUwvZ2FtZUFMLm1vZHVsZVwiO1xuaW1wb3J0IHsgTW92ZUFMTW9kdWxlIH0gZnJvbSBcIi4vbW92ZUFML21vdmVBTC5tb2R1bGVcIjtcbmltcG9ydCB7IFRoaW5rQUxNb2R1bGUgfSBmcm9tIFwiLi90aGlua0FML3RoaW5rQUwubW9kdWxlXCI7XG5cblxuQE5nTW9kdWxlKHtcbiAgcHJvdmlkZXJzOiBbXG4gICAgQmFja2VuZFNlcnZpY2UsXG4gICAgRmlyZWJhc2VTZXJ2aWNlLFxuICAgIFV0aWxzU2VydmljZSxcbiAgICBhdXRoUHJvdmlkZXJzXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3QoYXBwUm91dGVzKSxcbiAgICBMb2dpbk1vZHVsZSxcbiAgICBNYXBOb3dNb2R1bGUsICAgXG4gICAgTGlzdE1vZHVsZSxcbiAgICBMaXN0RGV0YWlsTW9kdWxlLFxuICAgIEVhdEFMTW9kdWxlLFxuICAgIEdhbWVBTE1vZHVsZSxcbiAgICBNb3ZlQUxNb2R1bGUsXG4gICAgVGhpbmtBTE1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgIEFwcENvbXBvbmVudCxcbiAgXSxcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXX0=