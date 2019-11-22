import {Injectable} from '@angular/core';
import {AEvent} from "../models/a-event";
import {HttpClient} from "@angular/common/http";
import {SessionService} from "../services/session/session.service";

@Injectable({
  providedIn: 'root'
})
export class AEvents11Service {
  private URL_DATA = "http://localhost:8084/aevents";

  public aEvents: AEvent[];
  public j: number;
  private copyRemovedEvent: AEvent;

  constructor(private httpClient: HttpClient, private sessionService: SessionService) {
    this.j = 0;
    this.aEvents = [];
    this.getAllAEvents();
  }

  getAEvents() {
    return this.aEvents;
  }

  getAevent(index: number) {
    return this.aEvents[index];
  }

  add(aEvent: AEvent): number {
    this.aEvents.push(aEvent);
    this.saveAllAEvents();
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
    this.aEvents.push(new AEvent(++this.j, "The fantastic event-" + this.j, AEvent.getRandomStatus(), this.randomDate(new Date(2019, 10, 1), new Date()),
      this.randomDate(new Date(2019, 10, 2), new Date()), AEvent.getRandomIsTicketed(),
      +((Math.random() * 15).toFixed(2)), "NO DESCPRIPTION", +(Math.random() * 100).toFixed()));
    this.saveAllAEvents();
  }

  randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

  getAllAEvents() {
    this.httpClient.get<AEvent[]>(this.URL_DATA)
      .subscribe(
        (events: AEvent[]) => {;
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
              this.aEvents.push(new AEvent(
                events[i].id,
                events[i].title,
                events[i].status,
                events[i].start,
                events[i].end,
                events[i].IsTicketed,
                events[i].participationFee,
                events[i].description,
                events[i].maxParticipants));
            }

          }
        },
        (error) => {
          console.log(error);
        }
      )
  }

  saveAllAEvents() {
    this.httpClient.put<AEvent[]>(this.URL_DATA, this.aEvents)
      .subscribe(
        (events) => {
          console.log("Ik zit in put: " + events);
        }
      )
  }
}
