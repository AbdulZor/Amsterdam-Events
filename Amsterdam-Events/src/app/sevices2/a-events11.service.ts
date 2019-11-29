import {Injectable} from '@angular/core';
import {AEvent} from "../models/a-event";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SessionService} from "../services/session/session.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AEvents11Service {
  private URL_DATA = "http://localhost:8084/aevents";

  public aEvents: AEvent[];
  public j: number;
  private copyRemovedEvent: AEvent;

  constructor(private httpClient: HttpClient, private sessionService: SessionService) {
    this.j = 8;
    this.aEvents = [];
    // this.getAllAEvents();
  }

  getAEvents() {
    return this.aEvents;
  }

  getAevent(index: number) {
    return this.aEvents[index];
  }

  add(aEvent: AEvent): number {
    this.aEvents.push(aEvent);
    this.saveAEvent(aEvent);
    // console.log("AEvents in array: " + this.aEvents);
    // console.log("AEvents from API: " + this.getAllAEvents());
    return this.aEvents.length - 1;
  }

  update(eventIndex: number, updatedAEvent: AEvent): void {
    if (this.sessionService.isAuthenticated()) {
      this.aEvents[eventIndex] = updatedAEvent;
      this.saveAllAEvents();
    }
  }

  remove(eventIndex: number): AEvent {
    if (this.sessionService.isAuthenticated()) {
      this.copyRemovedEvent = this.aEvents[eventIndex];
      this.aEvents.splice(eventIndex, 1);
      this.saveAllAEvents();
      return this.copyRemovedEvent;
    }
  }

  addRandomAEvent() {
    let aEvent = new AEvent(++this.j, "The fantastic event-" + this.j, AEvent.getRandomStatus(), this.randomDate(new Date(2019, 10, 1), new Date()), this.randomDate(new Date(2019, 10, 2), new Date()), AEvent.getRandomIsTicketed(), +((Math.random() * 15).toFixed(2)), "NO DESCPRIPTION", +(Math.random() * 100).toFixed());
    this.add(aEvent);
  }

  randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

  getAllAEvents() {
    return this.httpClient.get<AEvent[]>(this.URL_DATA)
      .subscribe(
        (events: AEvent[]) => {
          if (!events) {
            for (let i = 0; i < 5; i++) {
              this.addRandomAEvent();
              this.saveAllAEvents();
            }
          } else {
            // this.aEvents = events;
            console.log(this.aEvents);
            for (let i = 0; i < events.length; i++) {
              if (events[i] == null) {
                i++;
              }
              // this.aEvents = events ? events.map(o => AEvent.copyTrue(o)) : [];
              this.aEvents.push(new AEvent(events[i].id, events[i].title, events[i].status, events[i].start, events[i].end, events[i].IsTicketed, events[i].participationFee, events[i].description, events[i].maxParticipants));
            }

          }
        },
        (error) => {
          console.log(error);
        }
      )
  }

  getAllAEvents2(): Observable<AEvent[]> {
    return this.httpClient.get<AEvent[]>(this.URL_DATA);
  }

  saveAllAEvents() {
    this.httpClient.post<AEvent[]>(this.URL_DATA, this.aEvents)
      .subscribe(
        (events) => {
          console.log("Ik zit in put: " + events);
        }
      )
  }

  saveAEvent(AEvent: AEvent) {
    console.log(AEvent);
    this.httpClient.post<AEvent>(this.URL_DATA, AEvent)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
  }
}
