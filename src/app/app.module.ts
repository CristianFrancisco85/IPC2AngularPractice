import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { MenuUserComponent } from './menu-user/menu-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    MenuUserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
