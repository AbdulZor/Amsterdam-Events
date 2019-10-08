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
import { Overview4Component } from './components/events/overview4/overview4.component';
import { Detail4Component } from './components/events/detail4/detail4.component';
import {Detail42Component} from './components/events/detail42/detail42.component';

import {HttpClientModule} from "@angular/common/http";
import { Overview6Component } from './components/events/overview6/overview6.component';
import { Detail6Component } from './components/events/detail6/detail6.component';
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
    ErrorComponent,
    Overview4Component,
    Detail4Component,
    Detail42Component,
    Overview6Component,
    Detail6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
