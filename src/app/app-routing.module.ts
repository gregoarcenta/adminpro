import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthRoutingModule } from "./auth/auth-routing.module";
import { NoPageFoundComponent } from "./no-page-found/no-page-found.component";

const routes: Routes = [
  {
    path: "dashboard",
    loadChildren:() => import("./pages/pages.module").then(m => m.PagesModule)
  },
/*   {
    path: "auth",
    loadChildren:() => import("./auth/auth.module").then(m => m.AuthModule)
  }, */
  {
    path: "",
    redirectTo:"dashboard",
    pathMatch:"full"
  },
  {
    path: "**",
    component: NoPageFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AuthRoutingModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
