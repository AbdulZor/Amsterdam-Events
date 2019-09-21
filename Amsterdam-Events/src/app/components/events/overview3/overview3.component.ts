import { Component, OnInit } from '@angular/core';
import {AEvent} from "../../../models/a-event";
import {AEventsService} from "../../../services/a-events.service";

@Component({
  selector: 'app-overview3',
  templateUrl: './overview3.component.html',
  styleUrls: ['./overview3.component.css'],
  providers: [AEventsService]
})
export class Overview3Component implements OnInit {
  aEvents: AEvent[];
  selectedAEventIndex: number;
  selectedEvent: AEvent;

  constructor(private aEventService: AEventsService) {
  }

  ngOnInit() {
    this.aEvents = this.aEventService.aEvents;
  }

  private addRandomAEventClick() {
    this.aEventService.addRandomAEvent();
    this.selectedAEventIndex = (this.aEvents.length - 1);
    this.selectedEvent = AEvent.copyTrue(this.aEvents[this.selectedAEventIndex]);
  }

  setActive(index: number){
    if (this.selectedAEventIndex != -1 || this.selectedAEventIndex != null){
      this.selectedAEventIndex = index;
      this.selectedEvent = AEvent.copyTrue(this.aEvents[index]);
    }
  }
}
