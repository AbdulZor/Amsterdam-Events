import { Injectable } from '@angular/core';
import {AEvent} from "../models/a-event";

@Injectable({
  providedIn: 'root'
})
export class AEventsService {
  public aEvents: AEvent[];
  public j: number;
  private copyRemovedEvent: AEvent;

  constructor() {
    this.j = 0;
    this.aEvents = [];
    for (let i = 0; i < 9; i++) {
      this.addRandomAEvent();
    }
  }

  getAEvents(){
    return this.aEvents;
  }

  add(aEvent: AEvent) :number{
    this.aEvents.push(aEvent);
    return this.aEvents.length-1;
  }

  update(eventIndex: number, updatedAEvent: AEvent) :void{
    this.aEvents[eventIndex] = updatedAEvent;
  }

  remove(eventIndex: number): AEvent{
    this.copyRemovedEvent = this.aEvents[eventIndex];
    this.aEvents[eventIndex] = null;
    return this.copyRemovedEvent;
  }

  addRandomAEvent() {
    this.add(new AEvent("The fantastic event-" + ++this.j, AEvent.getRandomStatus(), this.randomDate(new Date(2019, 10, 1), new Date()),
      AEvent.getRandomIsTicketed(), this.randomDate(new Date(2019, 10, 2), new Date()),
      +((Math.random() * 15).toFixed(2)), "NO DESCPRIPTION", (Math.random() * 100).toFixed()));
  }

  randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

}
