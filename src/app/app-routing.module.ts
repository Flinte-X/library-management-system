import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import {UserSignupComponent} from './user-signup/user-signup.component';
import {AdminLoginComponent} from './admin-login/admin-login.component';

const routes: Routes = [
  { path: 'user-login', component: UserLoginComponent},
  { path: 'user-signup', component: UserSignupComponent},
  { path: 'admin-login', component: AdminLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [UserLoginComponent, UserSignupComponent, AdminLoginComponent];
