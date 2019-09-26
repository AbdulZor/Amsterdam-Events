import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {Detail2Component} from "./components/events/detail2/detail2.component";
import {Detail3Component} from "./components/events/detail3/detail3.component";
import {Overview1Component} from "./components/events/overview1/overview1.component";
import {Overview2Component} from "./components/events/overview2/overview2.component";
import {Overview3Component} from "./components/events/overview3/overview3.component";
import {ErrorComponent} from "./components/mainpage/error/error.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'overview1', component: Overview1Component},
  {path: 'overview2', component: Overview2Component , children: [
      {path: ':eventId', component: Detail2Component}
    ]
  },
  {path: 'overview3', component: Overview3Component , children: [
      {path: ':eventId', component: Detail3Component}
    ]
  },
  {path: '**', component: ErrorComponent}
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, {useHash: true})],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

