import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NgModule } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { thinkALRouting } from "./thinkAL.routes";
import { ThinkALComponent } from "./thinkAL.component";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    thinkALRouting
  ],
  declarations: [    
    ThinkALComponent
  ]
})
export class ThinkALModule {}
