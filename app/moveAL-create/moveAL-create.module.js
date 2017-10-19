"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var moveAL_create_routes_1 = require("./moveAL-create.routes");
var moveAL_create_component_1 = require("./moveAL-create.component");
var MoveALCreateModule = (function () {
    function MoveALCreateModule() {
    }
    return MoveALCreateModule;
}());
MoveALCreateModule = __decorate([
    core_1.NgModule({
        imports: [
            nativescript_module_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            moveAL_create_routes_1.moveALCreateRouting
        ],
        declarations: [
            moveAL_create_component_1.MoveALCreateComponent
        ]
    })
], MoveALCreateModule);
exports.MoveALCreateModule = MoveALCreateModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW92ZUFMLWNyZWF0ZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtb3ZlQUwtY3JlYXRlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGdGQUE4RTtBQUM5RSxzQ0FBeUM7QUFDekMsb0RBQXFFO0FBRXJFLCtEQUE2RDtBQUM3RCxxRUFBa0U7QUFZbEUsSUFBYSxrQkFBa0I7SUFBL0I7SUFBaUMsQ0FBQztJQUFELHlCQUFDO0FBQUQsQ0FBQyxBQUFsQyxJQUFrQztBQUFyQixrQkFBa0I7SUFWOUIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1Asd0NBQWtCO1lBQ2xCLCtCQUF1QjtZQUN2QiwwQ0FBbUI7U0FDcEI7UUFDRCxZQUFZLEVBQUU7WUFDWiwrQ0FBcUI7U0FDdEI7S0FDRixDQUFDO0dBQ1csa0JBQWtCLENBQUc7QUFBckIsZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cbmltcG9ydCB7IG1vdmVBTENyZWF0ZVJvdXRpbmcgfSBmcm9tIFwiLi9tb3ZlQUwtY3JlYXRlLnJvdXRlc1wiO1xuaW1wb3J0IHsgTW92ZUFMQ3JlYXRlQ29tcG9uZW50IH0gZnJvbSBcIi4vbW92ZUFMLWNyZWF0ZS5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICBtb3ZlQUxDcmVhdGVSb3V0aW5nXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogWyAgICBcbiAgICBNb3ZlQUxDcmVhdGVDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBNb3ZlQUxDcmVhdGVNb2R1bGUge31cbiJdfQ==