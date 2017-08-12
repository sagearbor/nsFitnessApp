import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NgModule } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { gameALRouting } from "./gameAL.routes";
import { GameALComponent } from "./gameAL.component";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    gameALRouting
  ],
  declarations: [    
    GameALComponent
  ]
})
export class GameALModule {}
