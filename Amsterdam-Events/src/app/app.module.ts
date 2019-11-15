import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {Overview1Component} from './components/events/overview1/overview1.component';
import {Overview2Component} from './components/events/overview2/overview2.component';
import {Detail2Component} from './components/events/detail2/detail2.component';
import {FormsModule} from "@angular/forms";
import {Overview3Component} from './components/events/overview3/overview3.component';
import {Detail3Component} from './components/events/detail3/detail3.component';
import {ErrorComponent} from './components/mainpage/error/error.component';
import {Overview4Component} from './components/events/overview4/overview4.component';
import {Detail4Component} from './components/events/detail4/detail4.component';
import {Detail42Component} from './components/events/detail42/detail42.component';

import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {Overview6Component} from './components/events/overview6/overview6.component';
import {Detail6Component} from './components/events/detail6/detail6.component';
import {AppFbComponent} from './app-fb.component';

import {AEventsService} from "./services/a-events.service";
import {Aevents2Service} from "./services/aevents2.service";
import {SessionService} from "./services/session/session.service";
import {LoginComponent} from './components/events/login/login.component';
import {RegisterComponent} from './components/events/register/register.component';
import {Header2Component} from './components/mainpage/header2/header2.component';
import {SignOnComponent} from './components/mainpage/sign-on/sign-on.component';
import {NavBar2Component} from './components/mainpage/nav-bar2/nav-bar2.component';
import {AuthGuardServiceService} from "./services/guards/auth-guard-service.service";
import {AuthInterceptorService} from "./auth-interceptor.service";
import { Overview11Component } from './components/aevents2/overview11/overview11.component';
import { Detail11Component } from './components/aevents2/detail11/detail11.component';
import {AEvents11Service} from "./sevices2/a-events11.service";
import {Overview11InterceptorService} from "./overview11-interceptor.service";

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
    Detail6Component,
    AppFbComponent,
    LoginComponent,
    RegisterComponent,
    Header2Component,
    SignOnComponent,
    NavBar2Component,
    Overview11Component,
    Detail11Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AEventsService,
    Aevents2Service,
    SessionService,
    AEvents11Service,
    AuthGuardServiceService,
    {provide: HTTP_INTERCEPTORS, useClass: Overview11InterceptorService, multi: true}
    // {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
  // bootstrap: [AppFbComponent]
})
export class AppModule {
}
