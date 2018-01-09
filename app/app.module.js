"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var http_1 = require("nativescript-angular/http");
var router_1 = require("nativescript-angular/router");
var angular_1 = require("nativescript-drop-down/angular");
var input_directive_1 = require("./input.directive");
var forms_1 = require("nativescript-angular/forms");
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
            forms_1.NativeScriptFormsModule,
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
            input_directive_1.MinLengthDirective
        ],
        bootstrap: [app_component_1.AppComponent],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLGtEQUFtRTtBQUNuRSxzREFBdUU7QUFDdkUsMERBQWdFO0FBQ2hFLHFEQUF5RTtBQUN6RSxvREFBcUU7QUFHckUsMkNBQXdEO0FBQ3hELGlEQUErQztBQUMvQyx1Q0FBMkU7QUFHM0UscURBQW1EO0FBQ25ELGtEQUFnRDtBQUNoRCx1RUFBb0U7QUFDcEUsd0RBQXNEO0FBQ3RELHFEQUFtRDtBQUNuRCx3REFBc0Q7QUFDdEQsd0RBQXNEO0FBQ3RELDBFQUF3RTtBQUN4RSwyREFBeUQ7QUFvQ3pELElBQWEsU0FBUztJQUF0QjtJQUF5QixDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBQTFCLElBQTBCO0FBQWIsU0FBUztJQWpDckIsZUFBUSxDQUFDO1FBQ1IsU0FBUyxFQUFFO1lBQ1QseUJBQWM7WUFDZCwwQkFBZTtZQUNmLHVCQUFZO1lBQ1osMEJBQWE7U0FDZDtRQUNELE9BQU8sRUFBRTtZQUNQLHdDQUFrQjtZQUNsQiwrQkFBdUI7WUFDdkIsNkJBQXNCO1lBQ3RCLGlDQUF3QjtZQUN4QixpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsc0JBQVMsQ0FBQztZQUMzQyx3QkFBYztZQUNkLDBCQUFXO1lBQ1gsNEJBQVk7WUFDWix3QkFBVTtZQUNWLHFDQUFnQjtZQUNoQiwwQkFBVztZQUNYLDRCQUFZO1lBQ1osNEJBQVk7WUFDWix3Q0FBa0I7WUFDbEIsOEJBQWE7U0FDZDtRQUNELFlBQVksRUFBRTtZQUNWLDRCQUFZO1lBQ1osb0NBQWtCO1NBQ2pCO1FBQ0wsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztRQUN6QixPQUFPLEVBQUU7WUFDRCx1QkFBZ0I7U0FDdEI7S0FDRCxDQUFDO0dBQ1MsU0FBUyxDQUFJO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBEcm9wRG93bk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZHJvcC1kb3duL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE1pbkxlbmd0aERpcmVjdGl2ZSwgSXNFbWFpbERpcmVjdGl2ZSB9IGZyb20gXCIuL2lucHV0LmRpcmVjdGl2ZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcblxuXG5pbXBvcnQgeyBhdXRoUHJvdmlkZXJzLCBhcHBSb3V0ZXMgfSBmcm9tIFwiLi9hcHAucm91dGVzXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSwgRmlyZWJhc2VTZXJ2aWNlLCBVdGlsc1NlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlc1wiO1xuXG5cbmltcG9ydCB7IExvZ2luTW9kdWxlIH0gZnJvbSBcIi4vbG9naW4vbG9naW4ubW9kdWxlXCI7XG5pbXBvcnQgeyBMaXN0TW9kdWxlIH0gZnJvbSBcIi4vbGlzdC9saXN0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTGlzdERldGFpbE1vZHVsZSB9IGZyb20gXCIuL2xpc3QtZGV0YWlsL2xpc3QtZGV0YWlsLm1vZHVsZVwiO1xuaW1wb3J0IHsgTWFwTm93TW9kdWxlIH0gZnJvbSBcIi4vbWFwTm93L21hcE5vdy5tb2R1bGVcIjtcbmltcG9ydCB7IEVhdEFMTW9kdWxlIH0gZnJvbSBcIi4vZWF0QUwvZWF0QUwubW9kdWxlXCI7XG5pbXBvcnQgeyBHYW1lQUxNb2R1bGUgfSBmcm9tIFwiLi9nYW1lQUwvZ2FtZUFMLm1vZHVsZVwiO1xuaW1wb3J0IHsgTW92ZUFMTW9kdWxlIH0gZnJvbSBcIi4vbW92ZUFML21vdmVBTC5tb2R1bGVcIjtcbmltcG9ydCB7IE1vdmVBTENyZWF0ZU1vZHVsZSB9IGZyb20gXCIuL21vdmVBTENyZWF0ZS9tb3ZlQUxDcmVhdGUubW9kdWxlXCI7XG5pbXBvcnQgeyBUaGlua0FMTW9kdWxlIH0gZnJvbSBcIi4vdGhpbmtBTC90aGlua0FMLm1vZHVsZVwiO1xuXG5cbkBOZ01vZHVsZSh7XG4gIHByb3ZpZGVyczogW1xuICAgIEJhY2tlbmRTZXJ2aWNlLFxuICAgIEZpcmViYXNlU2VydmljZSxcbiAgICBVdGlsc1NlcnZpY2UsXG4gICAgYXV0aFByb3ZpZGVyc1xuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KGFwcFJvdXRlcyksXG4gICAgRHJvcERvd25Nb2R1bGUsXG4gICAgTG9naW5Nb2R1bGUsXG4gICAgTWFwTm93TW9kdWxlLCAgIFxuICAgIExpc3RNb2R1bGUsXG4gICAgTGlzdERldGFpbE1vZHVsZSxcbiAgICBFYXRBTE1vZHVsZSxcbiAgICBHYW1lQUxNb2R1bGUsXG4gICAgTW92ZUFMTW9kdWxlLFxuICAgIE1vdmVBTENyZWF0ZU1vZHVsZSxcbiAgICBUaGlua0FMTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgTWluTGVuZ3RoRGlyZWN0aXZlICAgIFxuICAgICAgXSxcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcbiAgc2NoZW1hczogW1xuICAgICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcblx0ICBdXG4gIH0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19