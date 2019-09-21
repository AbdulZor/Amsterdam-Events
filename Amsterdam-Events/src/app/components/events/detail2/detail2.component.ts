import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AEvent} from "../../../models/a-event";

@Component({
  selector: 'app-detail2',
  templateUrl: './detail2.component.html',
  styleUrls: ['./detail2.component.css']
})
export class Detail2Component implements OnInit {
  @Input() editedEvent: AEvent;

  @Output() onSaveEvent = new EventEmitter<AEvent>();
  @Output() onDeleteEvent = new EventEmitter<AEvent>();

  constructor() {
  }

  ngOnInit() {
  }

  deleteEvent(){
    this.editedEvent = null;
    this.onDeleteEvent.emit(this.editedEvent);
  }

  saveEvent(){
    this.onSaveEvent.emit(this.editedEvent);
  }
}
