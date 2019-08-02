import { NgModule, Component } from '@angular/core';
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
import { ContributionfilledComponent } from './contributionfilled/contributionfilled.component';
import { TotalcontributionComponent } from './totalcontribution/totalcontribution.component';

import { TransactionStatusComponent } from './transaction-status/transaction-status.component';
import { RefundRequestComponent } from './refund-request/refund-request.component';
import { RefundRequest2Component } from './refund-request2/refund-request2.component';
import { Acknowledgement2Component } from './acknowledgement2/acknowledgement2.component';
import { Acknowledgement3Component } from './acknowledgement3/acknowledgement3.component';
import { EnetsComponent } from './enets/enets.component';
import { AppSuccessfulComponent } from './app-successful/app-successful.component';
import { SubmitStatusComponent } from './submit-status/submit-status.component';
import { DraftsubmissionComponent } from './draftsubmission/draftsubmission.component';
import { DeductionComponent } from './deduction/deduction.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { HeaderModifiedComponent } from './header-modified/header-modified.component';
import { ViewCayeContributionComponent } from './view-caye-contribution/view-caye-contribution.component';
import { ViewCayeRefundReqComponent } from './view-caye-refund-req/view-caye-refund-req.component';

import { HeaderMakecayeModifiedComponent } from './header-makecaye-modified/header-makecaye-modified.component';

import { HeaderRegloginModifiedComponent } from './header-reglogin-modified/header-reglogin-modified.component';
import { HeaderTransactionModifiedComponent } from './header-transaction-modified/header-transaction-modified.component';
import { ApplyCayeSubmissionNewComponent } from './apply-caye-submission-new/apply-caye-submission-new.component';
import { ApplicationformnewComponent } from './applicationformnew/applicationformnew.component';
import { SummarynewComponent } from './summarynew/summarynew.component';
import { AcknowledgenewComponent } from './acknowledgenew/acknowledgenew.component';
import { RequeststatusnewComponent } from './requeststatusnew/requeststatusnew.component';
import { ApplycayenewComponent } from './applycayenew/applycayenew.component';



import { TransactionhistorynewComponent } from './transactionhistorynew/transactionhistorynew.component';
import { FooternewComponent } from './footernew/footernew.component';
// import { TablehistoryComponent } from './tablehistory/tablehistory.component';

import { FooterModifiedComponent } from './footer-modified/footer-modified.component';

const routes: Routes = [
  {path:'footernew',component:FooternewComponent},

  {path:'header-old',component:HeaderComponent},
  {path:'footer-modified',component:FooterModifiedComponent},
  {path:'transactionhistorynew',component:TransactionhistorynewComponent},
  {path:'header-caye',component:HeaderMakecayeModifiedComponent},
  {path:'header-reglogin',component:HeaderRegloginModifiedComponent},
  {path:'header',component:HeaderModifiedComponent},
  {path:'header-makecaye',component:HeaderMakecayeModifiedComponent},
  {path:'header-transaction',component:HeaderTransactionModifiedComponent},
  {path:'applycayenew',component:ApplycayenewComponent},
  {path:'requeststatus',component:RequeststatusnewComponent},
  {path:'acknowledgenew',component:AcknowledgenewComponent},
  {path:'summarynew',component:SummarynewComponent},
  {path:'applicationformnew',component:ApplicationformnewComponent},
  {path:'registrationcayenew',component:ApplyCayeSubmissionNewComponent},
  // {path:'header',component:HeaderModifiedComponent},
  {path:'viewcayerefund',component:ViewCayeRefundReqComponent},
  {path:'viewcayecontribution',component:ViewCayeContributionComponent},
  {path:'transactionhistory',component:TransactionHistoryComponent},
  {path:'deduction',component:DeductionComponent},
  {path:'SubmitStatus',component:SubmitStatusComponent},
  {path:'AppSuccess',component:AppSuccessfulComponent},
  {path:'draftsubmission',component:DraftsubmissionComponent},
  {path:'enetspayment',component:EnetsComponent},
  {path:'totalcontribution',component:TotalcontributionComponent},
  {path:'filledform',component:ContributionfilledComponent},
  {path:'acknowledgement3',component:Acknowledgement3Component},
  {path:'acknowledgement2',component:Acknowledgement2Component},
  {path:'refund2',component:RefundRequest2Component},
  {path:'refund',component:RefundRequestComponent},
  {path:'transaction',component:TransactionStatusComponent},
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
