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
import {IssuedBooksComponent} from './issued-books/issued-books.component';
import {AddCategoryComponent} from './add-category/add-category.component';
import {ManageCategoryComponent} from './manage-category/manage-category.component';
import {AddAuthorComponent} from './add-author/add-author.component';
import {ManageAuthorComponent} from './manage-author/manage-author.component';
import {AddBookComponent} from './add-book/add-book.component';
import {ManageBookComponent} from './manage-book/manage-book.component';
import {ManageIssuedBooksComponent} from './manage-issued-books/manage-issued-books.component';
import {RegStudentsComponent} from './reg-students/reg-students.component';
import {AdminChangePasswordComponent} from './admin-change-password/admin-change-password.component';

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
      {path: 'admin-dashboard', component: AdminDashbaordComponent},
      {path: 'add-category', component: AddCategoryComponent},
      {path: 'manage-category', component: ManageCategoryComponent},
      {path: 'add-author', component: AddAuthorComponent},
      {path: 'manage-author', component: ManageAuthorComponent},
      {path: 'add-book', component: AddBookComponent},
      {path: 'manage-book', component: ManageBookComponent},
      {path: 'issue-new-book', component: IssuedBooksComponent},
      {path: 'manage-issued-books', component: ManageIssuedBooksComponent},
      {path: 'reg-students', component: RegStudentsComponent},
      {path: 'admin-change-password', component: AdminChangePasswordComponent}
    ]
  },
  {path: 'user',
    component: UserComponent,
    children: [
      {path: 'user-dashboard', component: UserDashbaordComponent},
      {path: 'issued-books', component: IssuedBooksComponent}
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
