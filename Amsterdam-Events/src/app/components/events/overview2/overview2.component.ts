import {Component, Input, OnInit, Output} from '@angular/core';
import {AEvent} from "../../../models/a-event";

@Component({
  selector: 'app-overview2',
  templateUrl: './overview2.component.html',
  styleUrls: ['./overview2.component.css']
})
export class Overview2Component implements OnInit {

  aEvent: AEvent;
  aEvents: AEvent[];
  j: number;
  activeRow: boolean;

  constructor() {
  }

  ngOnInit() {
    this.activeRow = false;
    this.j = 0;
    this.aEvents = [];
    for (let i = 0; i < 9; i++) {
      this.addRandomAEvent();
    }
  }

  addRandomAEvent() {
    this.aEvents.push(new AEvent("The fantastic event-" + this.j++, AEvent.getRandomStatus(), this.randomDate(new Date(2019, 10, 1), new Date()),
      false, this.randomDate(new Date(2019, 10, 2), new Date()),
      (Math.random() * 15).toFixed(2), "NO DESCPRIPTION", (Math.random() * 100).toFixed()));
    this.aEvent = this.aEvents[this.aEvents.length];
  }

  randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

  getEvent(getEvent: AEvent){
    this.aEvent = getEvent;
  }

  setActive(event: HTMLElement, index: number){
    console.log(this.activeRow);
    console.log(event);
    return this.activeRow = !this.activeRow;
  }
}
