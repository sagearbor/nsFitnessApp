import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ThinkALComponent } from "./thinkAL.component";

const thinkALRoutes: Routes = [
  { path: "thinkAL", component: ThinkALComponent },
];
export const thinkALRouting: ModuleWithProviders = RouterModule.forChild(thinkALRoutes);
