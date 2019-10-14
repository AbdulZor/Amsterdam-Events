import { Component, OnInit } from '@angular/core';
import {SessionService} from "../../../services/session/session.service";

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})
export class Header2Component implements OnInit {
  dateTime: Date;
  dateTimeFormatted: string;

  constructor(private SessionService: SessionService) {
    setInterval(() => {
      this.dateTime = new Date();
      this.dateTimeFormatted = this.dateTime.toLocaleString();
    }, 1000);
  }


  ngOnInit() {
  }

}
