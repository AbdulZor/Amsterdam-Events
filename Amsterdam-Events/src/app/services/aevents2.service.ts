import {Injectable} from '@angular/core';
import {AEvent} from "../models/a-event";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class Aevents2Service {
  private URL_DATA = "https://web-frameworks-abdul.firebaseio.com/data.json";

  public aEvents: AEvent[];
  public j: number;
  private copyRemovedEvent: AEvent;

  constructor(private httpClient: HttpClient) {
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
    this.aEvents[eventIndex] = updatedAEvent;
    this.saveAllAEvents();
  }

  remove(eventIndex: number): AEvent {
    this.copyRemovedEvent = this.aEvents[eventIndex];
    this.aEvents.splice(eventIndex, 1);
    this.saveAllAEvents();
    return this.copyRemovedEvent;
  }

  addRandomAEvent() {
    this.aEvents.push(new AEvent("The fantastic event-" + ++this.j, AEvent.getRandomStatus(), this.randomDate(new Date(2019, 10, 1), new Date()),
      AEvent.getRandomIsTicketed(), this.randomDate(new Date(2019, 10, 2), new Date()),
      +((Math.random() * 15).toFixed(2)), "NO DESCPRIPTION", (Math.random() * 100).toFixed()));
    this.saveAllAEvents();
  }

  randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

  getAllAEvents() {
    this.httpClient.get<AEvent[]>(this.URL_DATA)
      .subscribe(
        (events: AEvent[]) => {
          console.log("The events: " + typeof events);
          if (!events) {
            for (let i = 0; i < 5; i++) {
              this.addRandomAEvent();
            }
          } else {
            // this.aEvents = events;
            console.log(this.aEvents);
            for (let i = 0; i < events.length; i++) {
              console.log(events);
              if (events[i] == null) {
                i++;
              }
              this.aEvents.push(new AEvent(
                events[i].title,
                events[i].status,
                events[i].start,
                events[i].IsTicketed,
                events[i].end,
                events[i].participationFee,
                events[i].description,
                events[i].maxParticipants));
            }

          }
        },
        (error) => console.log(error)
      )
  }

  saveAllAEvents() {
    this.httpClient.put<AEvent[]>(this.URL_DATA, this.aEvents)
      .subscribe(
        (events) => {
          console.log("Ik zit in put: " + events);
        },
        (error) => {
          console.log(error);
        }
      )
  }
}
