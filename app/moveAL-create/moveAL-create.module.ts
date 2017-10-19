import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NgModule } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { moveALCreateRouting } from "./moveAL-create.routes";
import { MoveALCreateComponent } from "./moveAL-create.component";

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
