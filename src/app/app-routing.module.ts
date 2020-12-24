import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import {UserSignupComponent} from './user-signup/user-signup.component';
import {AdminLoginComponent} from './admin-login/admin-login.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {LoginComponent} from './login/login.component';
import {AdminComponent} from './admin/admin.component';
import {AdminDashbaordComponent} from './admin-dashbaord/admin-dashbaord.component';
import {UserDashbaordComponent} from './user-dashbaord/user-dashbaord.component';
import {UserComponent} from './user/user.component';

const routes: Routes = [
  { path: '', redirectTo: '/login/user-login', pathMatch: 'full'},
  { path: 'admin', redirectTo: '/admin/admin-dashboard', pathMatch: 'full'},
  { path: 'user', redirectTo: '/user/user-dashboard', pathMatch: 'full'},
  { path: 'login',
    component: LoginComponent,
    children: [
      {path: 'admin-login', component: AdminLoginComponent},
      {path: 'user-login', component: UserLoginComponent},
      {path: 'user-signup', component: UserSignupComponent}
    ]
  },
  {path: 'admin',
    component: AdminComponent,
    children: [
      {path: 'admin-dashboard', component: AdminDashbaordComponent}
    ]
  },
  {path: 'user',
    component: UserComponent,
    children: [
      {path: 'user-dashboard', component: UserDashbaordComponent}
    ]
  },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [UserLoginComponent, UserSignupComponent, AdminLoginComponent, PageNotFoundComponent];
