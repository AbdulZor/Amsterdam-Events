import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AEvent} from "../../../models/a-event";
import {Subscription} from "rxjs";
import {AEventsService} from "../../../services/a-events.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-detail42',
  templateUrl: './detail42.component.html',
  styleUrls: ['./detail42.component.css']
})
export class Detail42Component implements OnInit, OnDestroy {
  editedEvent: AEvent;
  editedEventId: number;
  @ViewChild('formElement', {static: false}) detailForm: NgForm;

  private subscriptionQueryParam: Subscription = null;

  constructor(private aEventService: AEventsService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.editedEventId = this.route.snapshot.queryParams['id'];
    this.editedEvent = AEvent.copyTrue(this.aEventService.getAEvents()[this.editedEventId]);

    this.subscriptionQueryParam =
      this.route.queryParams.subscribe(
        (params: Params) => {
          if (this.editedEventId == params['id']) {
            return;
          }
          if (!this.checkChanges()) {
            if (this.confirmDiscardChanged()) {
              this.editedEventId = params['id'];
              this.editedEvent = AEvent.copyTrue(this.aEventService.getAEvents()[this.editedEventId]);
              this.router.navigate([], {queryParams: {id: this.editedEventId}})
            } else {
              this.router.navigate([], {queryParams: {id: this.editedEventId}})
            }
          } else {
            this.editedEventId = params['id'];
            this.editedEvent = AEvent.copyTrue(this.aEventService.getAEvents()[this.editedEventId]);
          }
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
    console.log(this.detailForm.valid);
    console.log("In Sumbitted");
    this.aEventService.update(this.editedEventId, this.editedEvent);
    this.router.navigate(['..'], {relativeTo: this.route});
  }

  clearEventFields() {
    let confirmResult = confirm("Are you sure to clear all fields?");
    if (confirmResult) {
      this.editedEvent = new AEvent(null, null, null, null, null, null, null, null);
    }
  }

  resetEventFields() {
    if (!this.checkChanges()) {
      let confirmResult = confirm("Are you sure to discard the changes?");
      if (confirmResult) {
        this.editedEvent = this.getUneditedEvent();
        this.detailForm.form.markAsUntouched();
        this.detailForm.form.markAsPristine();
      }
    }
  }

  cancelEventField() {
    if (!this.checkChanges()) {
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

  checkChanges() {
    return this.aEventService.getAEvents()[this.editedEventId].equals(this.editedEvent);
  }

  confirmDiscardChanged() {
    return confirm('Are you sure to discard the changed?');
  }
}
