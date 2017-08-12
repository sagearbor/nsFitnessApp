import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NgModule } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { moveALRouting } from "./moveAL.routes";
import { MoveALComponent } from "./moveAL.component";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    moveALRouting
  ],
  declarations: [    
    MoveALComponent
  ]
})
export class MoveALModule {}
