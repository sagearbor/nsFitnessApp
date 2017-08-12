import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { GameALComponent } from "./gameAL.component";

const gameALRoutes: Routes = [
  { path: "gameAL", component: GameALComponent },
];
export const gameALRouting: ModuleWithProviders = RouterModule.forChild(gameALRoutes);
