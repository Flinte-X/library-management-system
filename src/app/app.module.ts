import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import { UserDashbaordComponent } from './user-dashbaord/user-dashbaord.component';
import { AdminDashbaordComponent } from './admin-dashbaord/admin-dashbaord.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    UserDashbaordComponent,
    AdminDashbaordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
