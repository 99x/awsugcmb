import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { HeroComponent } from "./hero/hero.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: AuthComponent
  },
  {
    path: "heros",
    component: HeroComponent
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
