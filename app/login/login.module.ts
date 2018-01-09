import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { MinLengthDirective, IsEmailDirective } from "../input.directive";


import { loginRouting } from "./login.routes";
import { LoginComponent } from "./login.component";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    loginRouting
  ],
  declarations: [
    LoginComponent
    ],
  schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class LoginModule { }
