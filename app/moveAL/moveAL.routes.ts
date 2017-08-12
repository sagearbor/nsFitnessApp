import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MoveALComponent } from "./moveAL.component";

const moveALRoutes: Routes = [
  { path: "moveAL", component: MoveALComponent },
];
export const moveALRouting: ModuleWithProviders = RouterModule.forChild(moveALRoutes);
