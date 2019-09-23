import {Component, OnChanges, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
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
  unsavedChanges: boolean;

  constructor(private aEventService: AEventsService) {
    this.aEvents = this.aEventService.aEvents;
    this.unsavedChanges = false;
  }

  ngOnInit() {
  }

  onChangeReq($event) {
    this.unsavedChanges = $event;
  }

  private addRandomAEventClick() {
    this.aEventService.addRandomAEvent();
    this.selectedAEventIndex = (this.aEvents.length - 1);
    this.selectedEvent = AEvent.copyTrue(this.aEvents[this.selectedAEventIndex]);
  }

  setActive(index: number) {
    if (this.selectedAEventIndex != -1 || this.selectedAEventIndex != null) {
      if (this.unsavedChanges) {
        let result = confirm("Ben je zeker van changes?");
        if (result == true) {
          this.selectedAEventIndex = index;
          this.selectedEvent = AEvent.copyTrue(this.aEvents[index]);
          this.unsavedChanges = false;
        }
      }else {
        this.selectedAEventIndex = index;
        this.selectedEvent = AEvent.copyTrue(this.aEvents[index]);
        this.unsavedChanges = false;
      }

    }
  }
}
