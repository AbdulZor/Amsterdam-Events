import { Component, OnInit } from '@angular/core';
import {SessionService} from "../../../services/session/session.service";

@Component({
  selector: 'app-nav-bar2',
  templateUrl: './nav-bar2.component.html',
  styleUrls: ['./nav-bar2.component.css']
})
export class NavBar2Component implements OnInit {

  constructor(private SessionService: SessionService) { }

  ngOnInit() {
  }

  logOut(){
    this.SessionService.signOff();
  }

}
