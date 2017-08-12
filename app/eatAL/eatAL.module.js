"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var eatAL_routes_1 = require("./eatAL.routes");
var eatAL_component_1 = require("./eatAL.component");
var EatALModule = (function () {
    function EatALModule() {
    }
    return EatALModule;
}());
EatALModule = __decorate([
    core_1.NgModule({
        imports: [
            nativescript_module_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            eatAL_routes_1.eatALRouting
        ],
        declarations: [
            eatAL_component_1.EatALComponent
        ]
    })
], EatALModule);
exports.EatALModule = EatALModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWF0QUwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZWF0QUwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0ZBQThFO0FBQzlFLHNDQUF5QztBQUN6QyxvREFBcUU7QUFFckUsK0NBQThDO0FBQzlDLHFEQUFtRDtBQVluRCxJQUFhLFdBQVc7SUFBeEI7SUFBMEIsQ0FBQztJQUFELGtCQUFDO0FBQUQsQ0FBQyxBQUEzQixJQUEyQjtBQUFkLFdBQVc7SUFWdkIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1Asd0NBQWtCO1lBQ2xCLCtCQUF1QjtZQUN2QiwyQkFBWTtTQUNiO1FBQ0QsWUFBWSxFQUFFO1lBQ1osZ0NBQWM7U0FDZjtLQUNGLENBQUM7R0FDVyxXQUFXLENBQUc7QUFBZCxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuXG5pbXBvcnQgeyBlYXRBTFJvdXRpbmcgfSBmcm9tIFwiLi9lYXRBTC5yb3V0ZXNcIjtcbmltcG9ydCB7IEVhdEFMQ29tcG9uZW50IH0gZnJvbSBcIi4vZWF0QUwuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgZWF0QUxSb3V0aW5nXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogWyAgICBcbiAgICBFYXRBTENvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEVhdEFMTW9kdWxlIHt9XG4iXX0=