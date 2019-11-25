import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AEvent} from "../../../models/a-event";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {AEvents11Service} from "../../../sevices2/a-events11.service";

@Component({
  selector: 'app-detail11',
  templateUrl: './detail11.component.html',
  styleUrls: ['./detail11.component.css']
})
export class Detail11Component implements OnInit, OnDestroy {
  editedEvent: AEvent;
  editedEventId: number;
  @ViewChild('formElement', {static: false}) detailForm: NgForm;

  private subscriptionQueryParam: Subscription = null;

  constructor(private aEventService: AEvents11Service,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.aEventService.getAllAEvents2().subscribe(
      (events: AEvent[]) => {
        events.forEach(
          (event: AEvent, index: number, array: []) => {
            if (index == this.route.snapshot.queryParams['id']){
              return this.editedEvent = event as AEvent;
            }
          }
        )
      }
    );

    this.editedEventId = this.route.snapshot.queryParams['id'];
    this.editedEvent = AEvent.copyTrue(this.editedEvent);

    this.subscriptionQueryParam =
      this.route.queryParams.subscribe(
        (params: Params) => {
          if (this.editedEventId == params['id']) {
            return;
          }
          if (!this.checkChanges()) {
            if (this.confirmDiscardChanged()) {
              this.editedEventId = params['id'];
              this.editedEvent = AEvent.copyTrue(this.editedEvent);
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
