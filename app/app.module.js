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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLGtEQUFtRTtBQUNuRSxzREFBdUU7QUFFdkUsMkNBQXdEO0FBQ3hELGlEQUErQztBQUMvQyx1Q0FBMkU7QUFFM0UscURBQW1EO0FBQ25ELGtEQUFnRDtBQUNoRCx1RUFBb0U7QUFDcEUsd0RBQXNEO0FBQ3RELHFEQUFtRDtBQUNuRCx3REFBc0Q7QUFDdEQsd0RBQXNEO0FBQ3RELDBFQUF3RTtBQUN4RSwyREFBeUQ7QUE4QnpELElBQWEsU0FBUztJQUF0QjtJQUF5QixDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBQTFCLElBQTBCO0FBQWIsU0FBUztJQTNCckIsZUFBUSxDQUFDO1FBQ1IsU0FBUyxFQUFFO1lBQ1QseUJBQWM7WUFDZCwwQkFBZTtZQUNmLHVCQUFZO1lBQ1osMEJBQWE7U0FDZDtRQUNELE9BQU8sRUFBRTtZQUNQLHdDQUFrQjtZQUNsQiw2QkFBc0I7WUFDdEIsaUNBQXdCO1lBQ3hCLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxzQkFBUyxDQUFDO1lBQzNDLDBCQUFXO1lBQ1gsNEJBQVk7WUFDWix3QkFBVTtZQUNWLHFDQUFnQjtZQUNoQiwwQkFBVztZQUNYLDRCQUFZO1lBQ1osNEJBQVk7WUFDWix3Q0FBa0I7WUFDbEIsOEJBQWE7U0FDZDtRQUNELFlBQVksRUFBRTtZQUNWLDRCQUFZO1NBQ2Y7UUFDRCxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO0tBQzFCLENBQUM7R0FDVyxTQUFTLENBQUk7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgYXV0aFByb3ZpZGVycywgYXBwUm91dGVzIH0gZnJvbSBcIi4vYXBwLnJvdXRlc1wiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UsIEZpcmViYXNlU2VydmljZSwgVXRpbHNTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXNcIjtcblxuaW1wb3J0IHsgTG9naW5Nb2R1bGUgfSBmcm9tIFwiLi9sb2dpbi9sb2dpbi5tb2R1bGVcIjtcbmltcG9ydCB7IExpc3RNb2R1bGUgfSBmcm9tIFwiLi9saXN0L2xpc3QubW9kdWxlXCI7XG5pbXBvcnQgeyBMaXN0RGV0YWlsTW9kdWxlIH0gZnJvbSBcIi4vbGlzdC1kZXRhaWwvbGlzdC1kZXRhaWwubW9kdWxlXCI7XG5pbXBvcnQgeyBNYXBOb3dNb2R1bGUgfSBmcm9tIFwiLi9tYXBOb3cvbWFwTm93Lm1vZHVsZVwiO1xuaW1wb3J0IHsgRWF0QUxNb2R1bGUgfSBmcm9tIFwiLi9lYXRBTC9lYXRBTC5tb2R1bGVcIjtcbmltcG9ydCB7IEdhbWVBTE1vZHVsZSB9IGZyb20gXCIuL2dhbWVBTC9nYW1lQUwubW9kdWxlXCI7XG5pbXBvcnQgeyBNb3ZlQUxNb2R1bGUgfSBmcm9tIFwiLi9tb3ZlQUwvbW92ZUFMLm1vZHVsZVwiO1xuaW1wb3J0IHsgTW92ZUFMQ3JlYXRlTW9kdWxlIH0gZnJvbSBcIi4vbW92ZUFMQ3JlYXRlL21vdmVBTENyZWF0ZS5tb2R1bGVcIjtcbmltcG9ydCB7IFRoaW5rQUxNb2R1bGUgfSBmcm9tIFwiLi90aGlua0FML3RoaW5rQUwubW9kdWxlXCI7XG5cblxuQE5nTW9kdWxlKHtcbiAgcHJvdmlkZXJzOiBbXG4gICAgQmFja2VuZFNlcnZpY2UsXG4gICAgRmlyZWJhc2VTZXJ2aWNlLFxuICAgIFV0aWxzU2VydmljZSxcbiAgICBhdXRoUHJvdmlkZXJzXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3QoYXBwUm91dGVzKSxcbiAgICBMb2dpbk1vZHVsZSxcbiAgICBNYXBOb3dNb2R1bGUsICAgXG4gICAgTGlzdE1vZHVsZSxcbiAgICBMaXN0RGV0YWlsTW9kdWxlLFxuICAgIEVhdEFMTW9kdWxlLFxuICAgIEdhbWVBTE1vZHVsZSxcbiAgICBNb3ZlQUxNb2R1bGUsXG4gICAgTW92ZUFMQ3JlYXRlTW9kdWxlLFxuICAgIFRoaW5rQUxNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgICBBcHBDb21wb25lbnQsXG4gIF0sXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19