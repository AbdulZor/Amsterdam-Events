import {Component, Input, OnInit, Output} from '@angular/core';
import {AEvent} from "../../../models/a-event";

@Component({
  selector: 'app-overview2',
  templateUrl: './overview2.component.html',
  styleUrls: ['./overview2.component.css']
})
export class Overview2Component implements OnInit {

  aEvent: AEvent;
  activeIndex: number;
  selectedEvent: AEvent;
  aEvents: AEvent[];
  j: number;

  constructor() {
  }

  ngOnInit() {
    this.selectedEvent = null;
    this.j = 0;
    this.aEvents = [];
    for (let i = 0; i < 9; i++) {
      this.addRandomAEvent();
    }
  }

  private addRandomAEventClick() {
    this.addRandomAEvent();
    this.activeIndex = (this.aEvents.length - 1);
    this.selectedEvent = AEvent.copyTrue(this.aEvents[this.activeIndex]);
  }

  addRandomAEvent() {
    this.aEvents.push(new AEvent("The fantastic event-" + ++this.j, AEvent.getRandomStatus(), this.randomDate(new Date(2019, 10, 1), new Date()),
      false, this.randomDate(new Date(2019, 10, 2), new Date()),
      +((Math.random() * 15).toFixed(2)), "NO DESCPRIPTION", (Math.random() * 100).toFixed()));
  }

  randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

  setActive(index: number){
    this.activeIndex = index;
    this.selectedEvent = AEvent.copyTrue(this.aEvents[index]);
  }

  onEventDeleted($event){
    this.aEvents[this.activeIndex] = $event;
    this.selectedEvent = $event;
  }

  onEventSave($event){
    this.aEvents[this.activeIndex] = $event;
    this.selectedEvent = $event;
  }
}
