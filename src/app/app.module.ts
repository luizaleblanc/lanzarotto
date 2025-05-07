import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UsersComponent } from './users/users.component';
import { MusiciansComponent } from './musicians/musicians.component';
import { RequestsComponent } from './requests/requests.component';
import { FinancialComponent } from './financial/financial.component';
import { AccessComponent } from './access/access.component';
import { PageTransitionComponent } from './components/page-transition';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        DashboardComponent,
        ForgotPasswordComponent,
        ResetPasswordComponent,
        UsersComponent,
        MusiciansComponent,
        RequestsComponent,
        FinancialComponent,
        AccessComponent,
        PageTransitionComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { } 