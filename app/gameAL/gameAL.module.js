"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var gameAL_routes_1 = require("./gameAL.routes");
var gameAL_component_1 = require("./gameAL.component");
var GameALModule = (function () {
    function GameALModule() {
    }
    return GameALModule;
}());
GameALModule = __decorate([
    core_1.NgModule({
        imports: [
            nativescript_module_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            gameAL_routes_1.gameALRouting
        ],
        declarations: [
            gameAL_component_1.GameALComponent
        ]
    })
], GameALModule);
exports.GameALModule = GameALModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZUFMLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdhbWVBTC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxnRkFBOEU7QUFDOUUsc0NBQXlDO0FBQ3pDLG9EQUFxRTtBQUVyRSxpREFBZ0Q7QUFDaEQsdURBQXFEO0FBWXJELElBQWEsWUFBWTtJQUF6QjtJQUEyQixDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUFDLEFBQTVCLElBQTRCO0FBQWYsWUFBWTtJQVZ4QixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCx3Q0FBa0I7WUFDbEIsK0JBQXVCO1lBQ3ZCLDZCQUFhO1NBQ2Q7UUFDRCxZQUFZLEVBQUU7WUFDWixrQ0FBZTtTQUNoQjtLQUNGLENBQUM7R0FDVyxZQUFZLENBQUc7QUFBZixvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuXG5pbXBvcnQgeyBnYW1lQUxSb3V0aW5nIH0gZnJvbSBcIi4vZ2FtZUFMLnJvdXRlc1wiO1xuaW1wb3J0IHsgR2FtZUFMQ29tcG9uZW50IH0gZnJvbSBcIi4vZ2FtZUFMLmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgIGdhbWVBTFJvdXRpbmdcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbICAgIFxuICAgIEdhbWVBTENvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEdhbWVBTE1vZHVsZSB7fVxuIl19