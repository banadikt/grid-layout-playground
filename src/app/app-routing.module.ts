import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SidebarComponent} from "./app-layout/sidebar/sidebar.component";
import {AppLayoutComponent} from "./app-layout/app-layout.component";

const routes: Routes = [
  {path: '', component: AppLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
