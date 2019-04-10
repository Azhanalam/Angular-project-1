import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {HeaderComponent} from './header/header.component';
import {HomepageComponent} from './homepage/homepage.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { SummaryComponent } from './summary/summary.component';
import { AcknowledgementComponent } from './acknowledgement/acknowledgement.component';
import {ApplyCayeComponent} from './apply-caye/apply-caye.component'

const routes: Routes = [
  {path:'acknowledgement',component:AcknowledgementComponent},
  {path:'summary',component:SummaryComponent},
  {path:'applicationform',component:ApplicationFormComponent},
  {path:'applycaye',component:ApplyCayeComponent},
  {path:'welcome',component:WelcomeComponent},
  {path:'homepage',component:HomepageComponent},
  {path:'',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
