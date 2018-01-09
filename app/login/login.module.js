"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var login_routes_1 = require("./login.routes");
var login_component_1 = require("./login.component");
var LoginModule = (function () {
    function LoginModule() {
    }
    return LoginModule;
}());
LoginModule = __decorate([
    core_1.NgModule({
        imports: [
            nativescript_module_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            login_routes_1.loginRouting
        ],
        declarations: [
            login_component_1.LoginComponent
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
], LoginModule);
exports.LoginModule = LoginModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELGdGQUE4RTtBQUM5RSxvREFBcUU7QUFJckUsK0NBQThDO0FBQzlDLHFEQUFtRDtBQWVuRCxJQUFhLFdBQVc7SUFBeEI7SUFBMkIsQ0FBQztJQUFELGtCQUFDO0FBQUQsQ0FBQyxBQUE1QixJQUE0QjtBQUFmLFdBQVc7SUFidkIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1Asd0NBQWtCO1lBQ2xCLCtCQUF1QjtZQUN2QiwyQkFBWTtTQUNiO1FBQ0QsWUFBWSxFQUFFO1lBQ1osZ0NBQWM7U0FDYjtRQUNILE9BQU8sRUFBRTtZQUNILHVCQUFnQjtTQUNuQjtLQUNKLENBQUM7R0FDVyxXQUFXLENBQUk7QUFBZixrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgTWluTGVuZ3RoRGlyZWN0aXZlLCBJc0VtYWlsRGlyZWN0aXZlIH0gZnJvbSBcIi4uL2lucHV0LmRpcmVjdGl2ZVwiO1xuXG5cbmltcG9ydCB7IGxvZ2luUm91dGluZyB9IGZyb20gXCIuL2xvZ2luLnJvdXRlc1wiO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tIFwiLi9sb2dpbi5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICBsb2dpblJvdXRpbmdcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTG9naW5Db21wb25lbnRcbiAgICBdLFxuICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luTW9kdWxlIHsgfVxuIl19