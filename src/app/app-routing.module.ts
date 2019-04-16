import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {HeaderComponent} from './header/header.component';
import {HomepageComponent} from './homepage/homepage.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { SummaryComponent } from './summary/summary.component';
import { AcknowledgementComponent } from './acknowledgement/acknowledgement.component';
import { ApplicationForm2Component } from './application-form2/application-form2.component';
import {ApplyCayeComponent} from './apply-caye/apply-caye.component'
import { Summary2Component } from './summary2/summary2.component';
import {UserpageComponent} from './userpage/userpage.component';
import {CayeContributionComponent} from './caye-contribution/caye-contribution.component';
import { ContributionFormComponent } from './contribution-form/contribution-form.component';

const routes: Routes = [
  {path:'contributionform',component:ContributionFormComponent},
  {path:'cayecontribution',component:CayeContributionComponent},
  {path:'userpage', component:UserpageComponent},
  {path:'summary2',component:Summary2Component},
  {path:'applicationform2',component:ApplicationForm2Component},
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
