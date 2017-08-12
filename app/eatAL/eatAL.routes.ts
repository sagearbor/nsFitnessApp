import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { EatALComponent } from "./eatAL.component";

const eatALRoutes: Routes = [
  { path: "eatAL", component: EatALComponent },
];
export const eatALRouting: ModuleWithProviders = RouterModule.forChild(eatALRoutes);
