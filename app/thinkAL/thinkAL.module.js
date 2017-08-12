"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var thinkAL_routes_1 = require("./thinkAL.routes");
var thinkAL_component_1 = require("./thinkAL.component");
var ThinkALModule = (function () {
    function ThinkALModule() {
    }
    return ThinkALModule;
}());
ThinkALModule = __decorate([
    core_1.NgModule({
        imports: [
            nativescript_module_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            thinkAL_routes_1.thinkALRouting
        ],
        declarations: [
            thinkAL_component_1.ThinkALComponent
        ]
    })
], ThinkALModule);
exports.ThinkALModule = ThinkALModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhpbmtBTC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0aGlua0FMLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGdGQUE4RTtBQUM5RSxzQ0FBeUM7QUFDekMsb0RBQXFFO0FBRXJFLG1EQUFrRDtBQUNsRCx5REFBdUQ7QUFZdkQsSUFBYSxhQUFhO0lBQTFCO0lBQTRCLENBQUM7SUFBRCxvQkFBQztBQUFELENBQUMsQUFBN0IsSUFBNkI7QUFBaEIsYUFBYTtJQVZ6QixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCx3Q0FBa0I7WUFDbEIsK0JBQXVCO1lBQ3ZCLCtCQUFjO1NBQ2Y7UUFDRCxZQUFZLEVBQUU7WUFDWixvQ0FBZ0I7U0FDakI7S0FDRixDQUFDO0dBQ1csYUFBYSxDQUFHO0FBQWhCLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cbmltcG9ydCB7IHRoaW5rQUxSb3V0aW5nIH0gZnJvbSBcIi4vdGhpbmtBTC5yb3V0ZXNcIjtcbmltcG9ydCB7IFRoaW5rQUxDb21wb25lbnQgfSBmcm9tIFwiLi90aGlua0FMLmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgIHRoaW5rQUxSb3V0aW5nXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogWyAgICBcbiAgICBUaGlua0FMQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVGhpbmtBTE1vZHVsZSB7fVxuIl19