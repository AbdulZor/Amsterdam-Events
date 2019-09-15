import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AEvent} from "../../../models/a-event";

@Component({
  selector: 'app-detail2',
  templateUrl: './detail2.component.html',
  styleUrls: ['./detail2.component.css']
})
export class Detail2Component implements OnInit {
  @Input() Aevent: AEvent;

  @Output() eventDetail = new EventEmitter<AEvent>();

  titleInput: string;
  description: string;
  status: string;
  isTicketed: boolean;
  participationFee: string;
  maxParticipation: string;


  constructor() {
  }

  ngOnInit() {
    console.log("The Aevent = " + this.Aevent.title);
    this.titleInput = this.Aevent.title;
    this.description = this.Aevent.description;
    this.status = this.Aevent.status;
    this.isTicketed = this.Aevent.IsTicketed;
    this.participationFee = this.Aevent.participationFee;
    this.maxParticipation = this.Aevent.maxParticipants;
    console.log(this.titleInput);
  }

  deleteEvent(){
    console.log(this.Aevent);
    this.Aevent.title = null;
    this.Aevent.description = null;
    this.Aevent.status = null;
    this.Aevent.IsTicketed = null;
    this.Aevent.participationFee = null;
    this.Aevent.maxParticipants = null;
    this.Aevent = null;
    this.eventDetail.emit(this.Aevent);
    console.log(this.Aevent);
  }

  saveEvent(){
    console.log(this.Aevent);
    this.Aevent.title = this.titleInput;
    this.Aevent.description = this.description;
    this.Aevent.status = this.status;
    this.Aevent.IsTicketed = this.isTicketed;
    this.Aevent.participationFee = this.participationFee;
    this.Aevent.maxParticipants = this.maxParticipation;
    this.eventDetail.emit(this.Aevent);
  }

  resetDetails() {
    this.Aevent = null;
    this.eventDetail.emit(this.Aevent);
  }
}
