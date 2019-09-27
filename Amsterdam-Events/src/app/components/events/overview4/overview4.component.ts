import {Component, OnDestroy, OnInit} from '@angular/core';
import {AEvent} from "../../../models/a-event";
import {AEventsService} from "../../../services/a-events.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-overview4',
  templateUrl: './overview4.component.html',
  styleUrls: ['./overview4.component.css']
})
export class Overview4Component implements OnInit, OnDestroy {
  aEvents: AEvent[];
  selectedAEventIndex: number;
  selectedEvent: AEvent;
  unsavedChanges: boolean;

  private subscriptionQueryParam: Subscription = null;

  constructor(private aEventService: AEventsService,
              private router: Router,
              private route: ActivatedRoute) {
    this.aEvents = this.aEventService.aEvents;
    this.unsavedChanges = false;
  }

  ngOnInit() {
    console.log(this.route.queryParams);
    console.log("Dit is een verandering van Abdul");
    this.unsavedChanges = this.route.queryParams['isEdited']; // lukt niet
    this.subscriptionQueryParam =
      this.route.queryParams.subscribe(
        (params: Params) => {
          console.log(params);
          this.selectedAEventIndex = params['id'];
          this.unsavedChanges = params['isEdited']; // lukt niet om gegeven van detail hier in deze comp te krijgen
        }
      )
  }

  ngOnDestroy(): void {
    this.subscriptionQueryParam.unsubscribe();
  }

  onChangeReq($event) {
    this.unsavedChanges = $event;
  }

  private addRandomAEventClick() {
    this.aEventService.addRandomAEvent();
    this.selectedAEventIndex = (this.aEvents.length - 1);
    this.selectedEvent = AEvent.copyTrue(this.aEvents[this.selectedAEventIndex]);
    this.router.navigate(['edit'], {relativeTo: this.route, queryParams: {id: this.selectedAEventIndex}});
  }

  /**
   * je moet de vorige editedEvent krijgen en vergelijken
   */
  setActive(index: number) {
    if (this.selectedAEventIndex != null && this.selectedEvent != null) {
      console.log("unsaved: " + this.unsavedChanges);
      if (!this.unsavedChanges) {
        let result = confirm("Ben je zeker van changes?");
        if (result) {
          this.selectedAEventIndex = index;
          this.selectedEvent = AEvent.copyTrue(this.aEvents[index]);
          this.unsavedChanges = false;
          this.selectedEvent = AEvent.copyTrue(this.aEventService.getAEvents()[index]);

          this.router.navigate(['edit'], {relativeTo: this.route, queryParams: {id: index, isEdited: this.unsavedChanges}});
        }
      } else {
        this.selectedAEventIndex = index;
        this.selectedEvent = AEvent.copyTrue(this.aEvents[index]);
        this.unsavedChanges = false;
        this.selectedEvent = AEvent.copyTrue(this.aEventService.getAEvents()[index]);
        this.router.navigate(['edit'], {relativeTo: this.route, queryParams: {id: index, isEdited: this.unsavedChanges}});
      }
    }else {
      this.selectedAEventIndex = index;
      this.selectedEvent = AEvent.copyTrue(this.aEvents[index]);
      this.router.navigate(['edit'], {relativeTo: this.route, queryParams: {id: index, isEdited: this.unsavedChanges}});
    }
  }

  checkChanges() {
    return this.aEventService.getAEvents()[this.selectedAEventIndex].equals(this.selectedEvent);
  }
}
