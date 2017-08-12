import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MapNowComponent } from "./mapNow.component";
import { AuthGuard } from "../auth-guard.service";


const mapNowRoutes: Routes = [
  { path: "", component: MapNowComponent, canActivate: [AuthGuard] },
];
export const mapNowRouting: ModuleWithProviders = RouterModule.forChild(mapNowRoutes);
