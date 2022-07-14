import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PagesRoutingModule } from "./pages-routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Grafica1Component } from "./grafica1/grafica1.component";
import { LayoutDashboardComponent } from "./layout-dashboard.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    LayoutDashboardComponent,
  ],
  imports: [CommonModule, PagesRoutingModule, SharedModule],
})
export class PagesModule {}
