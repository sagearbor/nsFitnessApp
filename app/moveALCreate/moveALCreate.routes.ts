import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MoveALCreateComponent } from "./moveALCreate.component";

const moveALCreateRoutes: Routes = [
  { path: "moveALCreate", component: MoveALCreateComponent },
];
export const moveALCreateRouting: ModuleWithProviders = RouterModule.forChild(moveALCreateRoutes);
