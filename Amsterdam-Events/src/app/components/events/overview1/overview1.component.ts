import {Component, OnInit} from '@angular/core';
import {AEvent} from "../../../models/a-event";

@Component({
  selector: 'app-overview1',
  templateUrl: './overview1.component.html',
  styleUrls: ['./overview1.component.css']
})
export class Overview1Component implements OnInit {
  aEvents: AEvent[];
  j: number;

  constructor() {
  }

  ngOnInit() {
    this.j = 0;
    this.aEvents = [];
    for (let i = 0; i < 9; i++) {
      this.addRandomAEvent();
    }
  }

  addRandomAEvent() {
    this.aEvents.push(new AEvent("The fantastic event-" + this.j++, AEvent.getRandomStatus(),
      this.randomDate(new Date(2019, 10, 1), new Date()),
      false, this.randomDate(new Date(2019, 10, 2), new Date()),
      +((Math.random() * 15).toFixed(2)),
      "NO DESCPRIPTION",
      (Math.random() * 100).toFixed()));
  }

  randomDate(start, end) {

    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

}
