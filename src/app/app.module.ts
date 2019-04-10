import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

import { FormsModule }   from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';


import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    WelcomeComponent,
    ApplicationFormComponent,
    SummaryComponent,
    AcknowledgementComponent,
    ApplicationForm2Component,
    ApplyCayeComponent
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
  bootstrap: [AppComponent]
})
export class AppModule { }
