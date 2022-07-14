import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { LayoutDashboardComponent } from './layout-dashboard.component';
import { ProgressComponent } from './progress/progress.component';

const routes: Routes = [
  {
    path:"dashboard",
    component:LayoutDashboardComponent,
    children:[
      {
        path: "",
        component: DashboardComponent,
      },
      {
        path: "progress",
        component: ProgressComponent,
      },
      {
        path: "grafica1",
        component: Grafica1Component,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
