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

  private subscriptionQueryParam: Subscription = null;

  constructor(private aEventService: AEventsService,
              private router: Router,
              private route: ActivatedRoute) {
    this.aEvents = this.aEventService.aEvents;
  }

  ngOnInit() {
    this.subscriptionQueryParam =
      this.route.queryParams.subscribe(
        (params: Params) => {
          console.log("in overview id=" + params['id']);
          this.selectedAEventIndex = params['id'];
          this.selectedEvent = this.aEventService.getAEvents()[params['id']];
          console.log("overview Index: " + this.selectedAEventIndex);
        }
      )
  }

  ngOnDestroy(): void {
    this.subscriptionQueryParam.unsubscribe();
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
      this.selectedAEventIndex = index;
      this.selectedEvent = AEvent.copyTrue(this.aEvents[index]);
      this.router.navigate(['edit'], {relativeTo: this.route, queryParams: {id: index}});
    }
    this.selectedAEventIndex = index;
    this.selectedEvent = AEvent.copyTrue(this.aEvents[index]);
    this.router.navigate(['edit'], {relativeTo: this.route, queryParams: {id: index}});
  }
}
