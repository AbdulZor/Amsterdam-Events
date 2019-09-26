import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Overview1Component } from './components/events/overview1/overview1.component';
import { Overview2Component } from './components/events/overview2/overview2.component';
import { Detail2Component } from './components/events/detail2/detail2.component';
import {FormsModule} from "@angular/forms";
import { Overview3Component } from './components/events/overview3/overview3.component';
import { Detail3Component } from './components/events/detail3/detail3.component';
import { ErrorComponent } from './components/mainpage/error/error.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NavBarComponent,
    Overview1Component,
    Overview2Component,
    Detail2Component,
    Overview3Component,
    Detail3Component,
    ErrorComponent
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
