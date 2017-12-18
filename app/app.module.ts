import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { DropDownModule } from "nativescript-drop-down/angular";

import { authProviders, appRoutes } from "./app.routes";
import { AppComponent } from "./app.component";
import { BackendService, FirebaseService, UtilsService } from "./services";


import { LoginModule } from "./login/login.module";
import { ListModule } from "./list/list.module";
import { ListDetailModule } from "./list-detail/list-detail.module";
import { MapNowModule } from "./mapNow/mapNow.module";
import { EatALModule } from "./eatAL/eatAL.module";
import { GameALModule } from "./gameAL/gameAL.module";
import { MoveALModule } from "./moveAL/moveAL.module";
import { MoveALCreateModule } from "./moveALCreate/moveALCreate.module";
import { ThinkALModule } from "./thinkAL/thinkAL.module";


@NgModule({
  providers: [
    BackendService,
    FirebaseService,
    UtilsService,
    authProviders
  ],
  imports: [
    NativeScriptModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(appRoutes),
    DropDownModule,
    LoginModule,
    MapNowModule,   
    ListModule,
    ListDetailModule,
    EatALModule,
    GameALModule,
    MoveALModule,
    MoveALCreateModule,
    ThinkALModule
  ],
  declarations: [
      AppComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
