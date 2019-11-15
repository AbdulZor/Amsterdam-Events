import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {Detail2Component} from "./components/events/detail2/detail2.component";
import {Detail3Component} from "./components/events/detail3/detail3.component";
import {Overview1Component} from "./components/events/overview1/overview1.component";
import {Overview2Component} from "./components/events/overview2/overview2.component";
import {Overview3Component} from "./components/events/overview3/overview3.component";
import {ErrorComponent} from "./components/mainpage/error/error.component";
import {Overview4Component} from "./components/events/overview4/overview4.component";
import {Detail4Component} from "./components/events/detail4/detail4.component";
import {Detail42Component} from "./components/events/detail42/detail42.component";
import {Overview6Component} from "./components/events/overview6/overview6.component";
import {Detail6Component} from "./components/events/detail6/detail6.component";
import {LoginComponent} from "./components/events/login/login.component";
import {SignOnComponent} from "./components/mainpage/sign-on/sign-on.component";
import {AuthGuardServiceService} from "./services/guards/auth-guard-service.service";
import {Overview11Component} from "./components/aevents2/overview11/overview11.component";
import {Detail11Component} from "./components/aevents2/detail11/detail11.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'events', children: [
      {path: 'overview1', component: Overview1Component},
      {
        path: 'overview2', component: Overview2Component, children: [
          {path: 'edit/:eventId', component: Detail2Component}
        ]
      },
      {
        path: 'overview3', component: Overview3Component, children: [
          {path: ':eventId/', component: Detail3Component}
        ]
      },
      {
        path: 'overview4', component: Overview4Component, children: [
          {path: 'edit', component: Detail4Component}
        ]
      },
      {
        path: 'overview42', component: Overview4Component, children: [
          {path: 'edit', component: Detail42Component}
        ]
      },
      {
        path: 'overview6', component: Overview6Component, children: [
          {path: 'edit', component: Detail6Component, canActivateChild: [AuthGuardServiceService]}
        ]
      },
      {
        path: 'overview11', component: Overview11Component, children: [
          {path: 'edit', component: Detail11Component, canActivate: [AuthGuardServiceService]}
        ]
      }
    ]
  },
  {
    path: 'login', component: SignOnComponent
  },
  {
    path: 'signup', component: SignOnComponent
  },
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  //imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

