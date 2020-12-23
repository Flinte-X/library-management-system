import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import {UserSignupComponent} from './user-signup/user-signup.component';
import {AdminLoginComponent} from './admin-login/admin-login.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {UserDashbaordComponent} from './user-dashbaord/user-dashbaord.component';
import {AdminDashbaordComponent} from './admin-dashbaord/admin-dashbaord.component';

const routes: Routes = [
  { path: 'user-login', component: UserLoginComponent},
  { path: 'user-signup', component: UserSignupComponent},
  { path: 'admin-login', component: AdminLoginComponent},
  { path: 'user-dashboard', component: UserDashbaordComponent},
  { path: 'admin-dashboard', component: AdminDashbaordComponent},
  { path: '', redirectTo: '/admin-login', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [UserLoginComponent, UserSignupComponent, AdminLoginComponent, PageNotFoundComponent];
