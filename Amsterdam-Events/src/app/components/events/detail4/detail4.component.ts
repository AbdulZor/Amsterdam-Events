import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {AEvent} from "../../../models/a-event";
import {AEventsService} from "../../../services/a-events.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {root} from "rxjs/internal-compatibility";

@Component({
  selector: 'app-detail4',
  templateUrl: './detail4.component.html',
  styleUrls: ['./detail4.component.css']
})
export class Detail4Component implements OnInit, OnDestroy {
  @Input() editedEvent: AEvent;
  editedEventId: number;
  @Input() isEdited: boolean;
  @Input() copyEditedEvent: AEvent;
  @Input() copyEditedEventId: number;

  private subscriptionQueryParam: Subscription = null;

  constructor(private aEventService: AEventsService,
              private router: Router,
              private route: ActivatedRoute) {
    this.isEdited = false;
  }

  ngOnInit() {
    this.editedEventId = this.route.snapshot.queryParams['id'];
    this.editedEvent = AEvent.copyTrue(this.aEventService.getAEvents()[this.editedEventId]);
    this.copyEditedEvent = this.getUneditedEvent();
    this.copyEditedEventId = this.editedEventId;

    this.subscriptionQueryParam =
      this.route.queryParams.subscribe(
        (params: Params) => {
          this.editedEventId = params['id'];
          this.editedEvent = AEvent.copyTrue(this.aEventService.getAEvents()[this.editedEventId]);
        }
      );
  }

  ngOnDestroy(): void {
    this.subscriptionQueryParam.unsubscribe();
  }

  deleteEvent() {
    let confirmResult = confirm("Are you sure to delete the event?");
    if (confirmResult) {
      this.aEventService.remove(this.editedEventId);
      this.editedEvent = null;
      this.router.navigate(['..'], {relativeTo: this.route});
    }
  }

  saveEvent() {
    this.aEventService.update(this.editedEventId, this.editedEvent);
    this.router.navigate(['..'], {relativeTo: this.route});
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
    if (!this.editedEvent.equals(this.copyEditedEvent)) {
      let confirmResult = confirm("Are you sure to discard the changes?");
      if (confirmResult) {
        this.editedEvent = this.getUneditedEvent();
      }
    }
  }

  cancelEventField() {
    if (!this.aEventService.getAEvents()[this.editedEventId].equals(this.editedEvent)) {
      let confirmResult = confirm("Are you sure to discard the changes?");
      if (confirmResult) {
        this.editedEvent = this.getUneditedEvent();
        this.changeEditedEventId();
      }
    }
    this.router.navigate(['..'], {relativeTo: this.route});
  }

  changeEditedEventId() {
    this.editedEventId = 0; // kan vgm ook weg, maar kijk er later naar
  }

  getUneditedEvent(): AEvent {
    let events = this.aEventService.getAEvents();
    return AEvent.copyTrue(events[this.editedEventId]);
  }

  checkChangesField() {
     this.isEdited = this.aEventService.getAEvents()[this.editedEventId].equals(this.editedEvent);
    // this.checkEditedEventChange.emit(!this.isEdited);
  }

  checkChangesButton() {
    return this.aEventService.getAEvents()[this.editedEventId].equals(this.editedEvent);
  }
}

