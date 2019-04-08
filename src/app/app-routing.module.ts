import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {HeaderComponent} from './header/header.component';
import {HomepageComponent} from './homepage/homepage.component';
import { RequestedFormComponent } from './requested-form/requested-form.component';
const routes: Routes = [
  {path:'',component:RequestedFormComponent},
  {path:'welcome',component:WelcomeComponent},
  {path:'header',component:HomepageComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
