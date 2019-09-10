import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  dateTime: Date;
  dateTimeFormatted: string;

  constructor() {
    setInterval(() => {
      this.dateTime = new Date();
      this.dateTimeFormatted = this.dateTime.toLocaleString();
      }, 1000);
  }


  ngOnInit() {
  }

}
