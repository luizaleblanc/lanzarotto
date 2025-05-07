import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UsersComponent } from './users/users.component';
import { MusiciansComponent } from './musicians/musicians.component';
import { RequestsComponent } from './requests/requests.component';
import { FinancialComponent } from './financial/financial.component';
import { AccessComponent } from './access/access.component';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: 'reset-password', component: ResetPasswordComponent },
    { path: 'users', component: UsersComponent },
    { path: 'musicians', component: MusiciansComponent },
    { path: 'requests', component: RequestsComponent },
    { path: 'financial', component: FinancialComponent },
    { path: 'access', component: AccessComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { } 