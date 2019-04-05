import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

import {HeaderComponent} from './header/header.component';
import {HomepageComponent} from './homepage/homepage.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
