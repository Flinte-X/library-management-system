import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import { UserDashbaordComponent } from './user-dashbaord/user-dashbaord.component';
import { AdminDashbaordComponent } from './admin-dashbaord/admin-dashbaord.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { IssuedBooksComponent } from './issued-books/issued-books.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ManageCategoryComponent } from './manage-category/manage-category.component';
import { AddAuthorComponent } from './add-author/add-author.component';
import { ManageAuthorComponent } from './manage-author/manage-author.component';
import { ManageBookComponent } from './manage-book/manage-book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { IssueNewBookComponent } from './issue-new-book/issue-new-book.component';
import { ManageIssuedBooksComponent } from './manage-issued-books/manage-issued-books.component';
import { RegStudentsComponent } from './reg-students/reg-students.component';
import { AdminChangePasswordComponent } from './admin-change-password/admin-change-password.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    UserDashbaordComponent,
    AdminDashbaordComponent,
    AdminComponent,
    UserComponent,
    LoginComponent,
    IssuedBooksComponent,
    AddCategoryComponent,
    ManageCategoryComponent,
    AddAuthorComponent,
    ManageAuthorComponent,
    ManageBookComponent,
    AddBookComponent,
    IssueNewBookComponent,
    ManageIssuedBooksComponent,
    RegStudentsComponent,
    AdminChangePasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
