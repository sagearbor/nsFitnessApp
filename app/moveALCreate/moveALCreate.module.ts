import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NgModule } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { moveALCreateRouting } from "./moveALCreate.routes";
import { MoveALCreateComponent } from "./moveALCreate.component";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    moveALCreateRouting
  ],
  declarations: [    
    MoveALCreateComponent
  ]
})
export class MoveALCreateModule {}
