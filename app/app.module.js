"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var http_1 = require("nativescript-angular/http");
var router_1 = require("nativescript-angular/router");
var angular_1 = require("nativescript-drop-down/angular");
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
var moveALCreate_module_1 = require("./moveALCreate/moveALCreate.module");
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
            angular_1.DropDownModule,
            login_module_1.LoginModule,
            mapNow_module_1.MapNowModule,
            list_module_1.ListModule,
            list_detail_module_1.ListDetailModule,
            eatAL_module_1.EatALModule,
            gameAL_module_1.GameALModule,
            moveAL_module_1.MoveALModule,
            moveALCreate_module_1.MoveALCreateModule,
            thinkAL_module_1.ThinkALModule
        ],
        declarations: [
            app_component_1.AppComponent,
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLGtEQUFtRTtBQUNuRSxzREFBdUU7QUFDdkUsMERBQWdFO0FBRWhFLDJDQUF3RDtBQUN4RCxpREFBK0M7QUFDL0MsdUNBQTJFO0FBRzNFLHFEQUFtRDtBQUNuRCxrREFBZ0Q7QUFDaEQsdUVBQW9FO0FBQ3BFLHdEQUFzRDtBQUN0RCxxREFBbUQ7QUFDbkQsd0RBQXNEO0FBQ3RELHdEQUFzRDtBQUN0RCwwRUFBd0U7QUFDeEUsMkRBQXlEO0FBK0J6RCxJQUFhLFNBQVM7SUFBdEI7SUFBeUIsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQUExQixJQUEwQjtBQUFiLFNBQVM7SUE1QnJCLGVBQVEsQ0FBQztRQUNSLFNBQVMsRUFBRTtZQUNULHlCQUFjO1lBQ2QsMEJBQWU7WUFDZix1QkFBWTtZQUNaLDBCQUFhO1NBQ2Q7UUFDRCxPQUFPLEVBQUU7WUFDUCx3Q0FBa0I7WUFDbEIsNkJBQXNCO1lBQ3RCLGlDQUF3QjtZQUN4QixpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsc0JBQVMsQ0FBQztZQUMzQyx3QkFBYztZQUNkLDBCQUFXO1lBQ1gsNEJBQVk7WUFDWix3QkFBVTtZQUNWLHFDQUFnQjtZQUNoQiwwQkFBVztZQUNYLDRCQUFZO1lBQ1osNEJBQVk7WUFDWix3Q0FBa0I7WUFDbEIsOEJBQWE7U0FDZDtRQUNELFlBQVksRUFBRTtZQUNWLDRCQUFZO1NBQ2Y7UUFDRCxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO0tBQzFCLENBQUM7R0FDVyxTQUFTLENBQUk7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IERyb3BEb3duTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1kcm9wLWRvd24vYW5ndWxhclwiO1xuXG5pbXBvcnQgeyBhdXRoUHJvdmlkZXJzLCBhcHBSb3V0ZXMgfSBmcm9tIFwiLi9hcHAucm91dGVzXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSwgRmlyZWJhc2VTZXJ2aWNlLCBVdGlsc1NlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlc1wiO1xuXG5cbmltcG9ydCB7IExvZ2luTW9kdWxlIH0gZnJvbSBcIi4vbG9naW4vbG9naW4ubW9kdWxlXCI7XG5pbXBvcnQgeyBMaXN0TW9kdWxlIH0gZnJvbSBcIi4vbGlzdC9saXN0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTGlzdERldGFpbE1vZHVsZSB9IGZyb20gXCIuL2xpc3QtZGV0YWlsL2xpc3QtZGV0YWlsLm1vZHVsZVwiO1xuaW1wb3J0IHsgTWFwTm93TW9kdWxlIH0gZnJvbSBcIi4vbWFwTm93L21hcE5vdy5tb2R1bGVcIjtcbmltcG9ydCB7IEVhdEFMTW9kdWxlIH0gZnJvbSBcIi4vZWF0QUwvZWF0QUwubW9kdWxlXCI7XG5pbXBvcnQgeyBHYW1lQUxNb2R1bGUgfSBmcm9tIFwiLi9nYW1lQUwvZ2FtZUFMLm1vZHVsZVwiO1xuaW1wb3J0IHsgTW92ZUFMTW9kdWxlIH0gZnJvbSBcIi4vbW92ZUFML21vdmVBTC5tb2R1bGVcIjtcbmltcG9ydCB7IE1vdmVBTENyZWF0ZU1vZHVsZSB9IGZyb20gXCIuL21vdmVBTENyZWF0ZS9tb3ZlQUxDcmVhdGUubW9kdWxlXCI7XG5pbXBvcnQgeyBUaGlua0FMTW9kdWxlIH0gZnJvbSBcIi4vdGhpbmtBTC90aGlua0FMLm1vZHVsZVwiO1xuXG5cbkBOZ01vZHVsZSh7XG4gIHByb3ZpZGVyczogW1xuICAgIEJhY2tlbmRTZXJ2aWNlLFxuICAgIEZpcmViYXNlU2VydmljZSxcbiAgICBVdGlsc1NlcnZpY2UsXG4gICAgYXV0aFByb3ZpZGVyc1xuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KGFwcFJvdXRlcyksXG4gICAgRHJvcERvd25Nb2R1bGUsXG4gICAgTG9naW5Nb2R1bGUsXG4gICAgTWFwTm93TW9kdWxlLCAgIFxuICAgIExpc3RNb2R1bGUsXG4gICAgTGlzdERldGFpbE1vZHVsZSxcbiAgICBFYXRBTE1vZHVsZSxcbiAgICBHYW1lQUxNb2R1bGUsXG4gICAgTW92ZUFMTW9kdWxlLFxuICAgIE1vdmVBTENyZWF0ZU1vZHVsZSxcbiAgICBUaGlua0FMTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgICAgQXBwQ29tcG9uZW50LFxuICBdLFxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==