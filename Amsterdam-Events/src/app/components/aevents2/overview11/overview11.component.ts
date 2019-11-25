import {Component, OnDestroy, OnInit} from '@angular/core';
import {AEvent} from "../../../models/a-event";
import {Observable, Subscription} from "rxjs";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {AEvents11Service} from "../../../sevices2/a-events11.service";
import {SessionService} from "../../../services/session/session.service";
import {throws} from "assert";

@Component({
  selector: 'app-overview11',
  templateUrl: './overview11.component.html',
  styleUrls: ['./overview11.component.css']
})
export class Overview11Component implements OnInit, OnDestroy {
  private aEvents: AEvent[];
  private selectedAEventIndex: number;
  private selectedEvent: AEvent;

  private events$: Observable<AEvent[]>;

  private subscriptionQueryParam: Subscription = null;

  constructor(private aEventService: AEvents11Service,
              private router: Router,
              private route: ActivatedRoute,
              private SessionService: SessionService) {
  }

  ngOnInit() {
    this.aEvents = [];
    this.events$ = this.aEventService.getAllAEvents2();

    this.aEventService.getAllAEvents2().subscribe(
      (events: AEvent[]) => {
        events.forEach(
          (event: AEvent) => {
            this.aEvents.push(event as AEvent);
          }
        );
        this.subscriptionQueryParam =
          this.route.queryParams.subscribe(
            (params: Params) => {
              this.selectedAEventIndex = params['id'];
              this.selectedEvent = this.aEvents[this.selectedAEventIndex];
            }
          )
      },
      (error => throws(error, "There was an error getting the events from the API" + error))
    );


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
