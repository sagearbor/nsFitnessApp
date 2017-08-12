import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NgModule } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { mapNowRouting } from "./mapNow.routes";
import { MapNowComponent } from "./mapNow.component";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    mapNowRouting
  ],
  declarations: [    
    MapNowComponent
  ]
})
export class MapNowModule {}
