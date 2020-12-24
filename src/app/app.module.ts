import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import { UserDashbaordComponent } from './user-dashbaord/user-dashbaord.component';
import { AdminDashbaordComponent } from './admin-dashbaord/admin-dashbaord.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    UserDashbaordComponent,
    AdminDashbaordComponent,
    AdminComponent,
    UserComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
