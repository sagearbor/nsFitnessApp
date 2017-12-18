import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NgModule } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { moveALCreateRouting } from "./moveALCreate.routes";
import { MoveALCreateComponent } from "./moveALCreate.component";
import { DropDownModule } from "nativescript-drop-down/angular";


@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    DropDownModule,
    moveALCreateRouting
  ],
  declarations: [    
    MoveALCreateComponent
  ]
})
export class MoveALCreateModule {}
