"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var moveALCreate_routes_1 = require("./moveALCreate.routes");
var moveALCreate_component_1 = require("./moveALCreate.component");
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
            moveALCreate_routes_1.moveALCreateRouting
        ],
        declarations: [
            moveALCreate_component_1.MoveALCreateComponent
        ]
    })
], MoveALCreateModule);
exports.MoveALCreateModule = MoveALCreateModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW92ZUFMQ3JlYXRlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1vdmVBTENyZWF0ZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxnRkFBOEU7QUFDOUUsc0NBQXlDO0FBQ3pDLG9EQUFxRTtBQUVyRSw2REFBNEQ7QUFDNUQsbUVBQWlFO0FBWWpFLElBQWEsa0JBQWtCO0lBQS9CO0lBQWlDLENBQUM7SUFBRCx5QkFBQztBQUFELENBQUMsQUFBbEMsSUFBa0M7QUFBckIsa0JBQWtCO0lBVjlCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLHdDQUFrQjtZQUNsQiwrQkFBdUI7WUFDdkIseUNBQW1CO1NBQ3BCO1FBQ0QsWUFBWSxFQUFFO1lBQ1osOENBQXFCO1NBQ3RCO0tBQ0YsQ0FBQztHQUNXLGtCQUFrQixDQUFHO0FBQXJCLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuXG5pbXBvcnQgeyBtb3ZlQUxDcmVhdGVSb3V0aW5nIH0gZnJvbSBcIi4vbW92ZUFMQ3JlYXRlLnJvdXRlc1wiO1xuaW1wb3J0IHsgTW92ZUFMQ3JlYXRlQ29tcG9uZW50IH0gZnJvbSBcIi4vbW92ZUFMQ3JlYXRlLmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgIG1vdmVBTENyZWF0ZVJvdXRpbmdcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbICAgIFxuICAgIE1vdmVBTENyZWF0ZUNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE1vdmVBTENyZWF0ZU1vZHVsZSB7fVxuIl19