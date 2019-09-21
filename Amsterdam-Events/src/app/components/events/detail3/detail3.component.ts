import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges} from '@angular/core';
import {AEventsService} from "../../../services/a-events.service";
import {AEvent} from "../../../models/a-event";

@Component({
  selector: 'app-detail3',
  templateUrl: './detail3.component.html',
  styleUrls: ['./detail3.component.css']
})
export class Detail3Component implements OnInit, OnChanges {
  @Input() editedEvent: AEvent;
  @Input() editedEventId: number;
  copyEditedEvent: AEvent;
  copyEditedEventId: number;

  @Output() editedEventIdChange = new EventEmitter<number>();

  constructor(private aEventService: AEventsService) {
  }

  ngOnInit() {
    this.copyEditedEvent = this.getUneditedEvent();
    this.copyEditedEventId = this.editedEventId;
  }

  ngOnChanges(changes: SimpleChanges): void {
    const id: SimpleChange = changes.editedEventId;
    const event: SimpleChange = changes.editedEvent;
    console.log(changes);
    if (changes.editedEventId != undefined) {
      if (id.previousValue != undefined && event.previousValue != undefined) {
        let uneditedEventPrev = this.getUneditedEventByIndex(id.previousValue);
        if (id.currentValue != id.previousValue.editedEventId && !event.previousValue.equals(uneditedEventPrev)) {
          let confirmResult = confirm("Are you sure to discard edited changes?");
          if (!confirmResult){
            this.editedEvent = event.previousValue;
            this.editedEventId = id.previousValue;
            event.currentValue = event.previousValue;
            id.currentValue = id.previousValue;
            this.editedEventIdChange.emit(id.previousValue);
          }
        }
      }
    }
    // if (id.previousValue && id.previousValue)
  }

  // kijk naar changes in editedEvent vergeleken met copy nadat je op andere id klikt
  // ngOnChanges() {
  //   this.copyEditedEvent = this.getUneditedEvent();
  //   if (this.aEventService.getAEvents()[this.copyEditedEventId].equals())
  // }


  deleteEvent() {
    let confirmResult = confirm("Are you sure to delete the event?");
    if (confirmResult) {
      this.aEventService.remove(this.editedEventId);
      this.editedEvent = null;
      this.changeEditedEventId();
      return this.getUneditedEvent();
    }
  }

  saveEvent() {
    this.aEventService.update(this.editedEventId, this.editedEvent);
    this.changeEditedEventId();
  }

  clearEventFields() {
    let confirmResult = confirm("Are you sure to clear all fields?");
    if (confirmResult) {
      this.editedEvent = new AEvent(null, null, null, null,
        null, null, null, null
      );
    }
  }

  resetEventFields() {
    console.log(this.editedEvent.equals(this.copyEditedEvent));
    if (!this.editedEvent.equals(this.copyEditedEvent)) {
      let confirmResult = confirm("Are you sure to discard the changes?");
      if (confirmResult) this.editedEvent = this.getUneditedEvent();
    }
    console.log(this.editedEvent);
  }

  cancelEventField() {
    if (!this.checkChanges()) {
      let confirmResult = confirm("Are you sure to discard the changes?");
      if (confirmResult) {
        this.editedEvent = this.getUneditedEvent();
        this.changeEditedEventId();
      }
    } else {
      this.changeEditedEventId();
    }
  }

  changeEditedEventId() {
    this.editedEventId = -1;
    this.editedEventIdChange.emit(this.editedEventId);
  }

  getUneditedEvent(): AEvent {
    let events = this.aEventService.getAEvents();
    return AEvent.copyTrue(events[this.editedEventId]);
  }

  getUneditedEventByIndex(index: number): AEvent {
    let events = this.aEventService.getAEvents();
    return AEvent.copyTrue(events[index]);
  }

  checkChanges() {
    return this.editedEvent.equals(this.copyEditedEvent);
  }
}
