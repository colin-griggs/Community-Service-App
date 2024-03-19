import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { CalenderComponent } from './home/calender/calender.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { LogInComponent } from './log-in/log-in.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';

 
@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    WelcomeComponent,
    CalenderComponent,
    AdminPageComponent,
    LogInComponent,
    HomeComponent,
    RegisterComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
