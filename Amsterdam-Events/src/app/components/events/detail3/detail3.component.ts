import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges} from '@angular/core';
import {AEventsService} from "../../../services/a-events.service";
import {AEvent} from "../../../models/a-event";

@Component({
  selector: 'app-detail3',
  templateUrl: './detail3.component.html',
  styleUrls: ['./detail3.component.css']
})
export class Detail3Component implements OnInit {
  @Input() editedEvent: AEvent;
  @Input() editedEventId: number;
  @Input() isEdited: boolean;
  @Input() copyEditedEvent: AEvent;
  @Input() copyEditedEventId: number;

  @Output() editedEventIdChange = new EventEmitter<number>();
  @Output() checkEditedEventChange = new EventEmitter<boolean>();

  constructor(private aEventService: AEventsService) {
    this.isEdited = false;
  }

  ngOnInit() {
    this.copyEditedEvent = this.getUneditedEvent();
    this.copyEditedEventId = this.editedEventId;
  }

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
    this.isEdited = false;
    this.checkChangesField();
    this.changeEditedEventId();
  }

  clearEventFields() {
    let confirmResult = confirm("Are you sure to clear all fields?");
    if (confirmResult) {
      this.editedEvent = new AEvent(null, null, null, null,
        null, null, null, null
      );
      this.checkChangesField();
    }
  }

  resetEventFields() {
    if (!this.editedEvent.equals(this.copyEditedEvent)) {
      let confirmResult = confirm("Are you sure to discard the changes?");
      if (confirmResult) {
        this.editedEvent = this.getUneditedEvent();
      }
    }
    this.checkChangesField();
  }

  cancelEventField() {
    if (!this.aEventService.getAEvents()[this.editedEventId].equals(this.editedEvent)) {
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

  checkChangesField() {
    this.isEdited = this.aEventService.getAEvents()[this.editedEventId].equals(this.editedEvent);
    this.checkEditedEventChange.emit(!this.isEdited);
  }

  checkChangesButton() {
    return this.aEventService.getAEvents()[this.editedEventId].equals(this.editedEvent);
  }
}
