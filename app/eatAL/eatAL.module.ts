import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NgModule } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { eatALRouting } from "./eatAL.routes";
import { EatALComponent } from "./eatAL.component";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    eatALRouting
  ],
  declarations: [    
    EatALComponent
  ]
})
export class EatALModule {}
