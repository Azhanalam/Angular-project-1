import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

import { FormsModule }   from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';


import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { HeaderAfterComponent } from './header-after/header-after.component';
import { FooterComponent } from './footer/footer.component';
import { MatListModule } from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { WelcomeComponent } from './welcome/welcome.component';
import { MatCardModule } from '@angular/material/card';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { SummaryComponent } from './summary/summary.component';
import { AcknowledgementComponent } from './acknowledgement/acknowledgement.component';
import { ApplicationForm2Component } from './application-form2/application-form2.component';
import { ApplyCayeComponent } from './apply-caye/apply-caye.component';
import { Summary2Component } from './summary2/summary2.component';
import { UserpageComponent } from './userpage/userpage.component';
import { CayeContributionComponent } from './caye-contribution/caye-contribution.component';
import { ContributionFormComponent } from './contribution-form/contribution-form.component';
import { ContributionfilledComponent } from './contributionfilled/contributionfilled.component';
import { TotalcontributionComponent } from './totalcontribution/totalcontribution.component';
import { TransactionStatusComponent } from './transaction-status/transaction-status.component';
import { RefundRequestComponent } from './refund-request/refund-request.component';
import { RefundRequest2Component } from './refund-request2/refund-request2.component';
import { Acknowledgement2Component } from './acknowledgement2/acknowledgement2.component';
import { Acknowledgement3Component } from './acknowledgement3/acknowledgement3.component';
import { EnetsComponent } from './enets/enets.component';
import { HeaderMakecayeComponent } from './header-makecaye/header-makecaye.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    HeaderAfterComponent,
    FooterComponent,
    LoginComponent,
    WelcomeComponent,
    ApplicationFormComponent,
    SummaryComponent,
    AcknowledgementComponent,
    ApplicationForm2Component,
    ApplyCayeComponent,
    Summary2Component,
    UserpageComponent,
    CayeContributionComponent,
    ContributionFormComponent,
    ContributionfilledComponent,
    TotalcontributionComponent,
    TransactionStatusComponent,
    RefundRequestComponent,
    RefundRequest2Component,
    Acknowledgement2Component,
    Acknowledgement3Component,
    EnetsComponent,
    HeaderMakecayeComponent
  ],
  imports: [
    MatListModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatButtonModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  // {provide: LocationStrategy, useClass: HashLocationStrategy}
  bootstrap: [AppComponent]
})
export class AppModule { }
