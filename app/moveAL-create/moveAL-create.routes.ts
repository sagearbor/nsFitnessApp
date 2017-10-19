import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MoveALCreateComponent } from "./moveAL-create.component";

const moveALCreateRoutes: Routes = [
  { path: "moveAL-create", component: MoveALCreateComponent },
];
export const moveALCreateRouting: ModuleWithProviders = RouterModule.forChild(moveALCreateRoutes);
