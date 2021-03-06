export class AEvent {
  id: number;
  title: string;
  status: AEventStatus;
  start: Date;
  end: Date;
  IsTicketed: boolean;
  participationFee: number;
  description: string;
  maxParticipants: number;


  constructor(id?: number, title?: string, status?: AEventStatus, start?: Date,
              end?: Date, IsTicketed?: boolean, participationFee?: number, description?: string, maxParticipants?: number) {
    this.id = id;
    this.title = title;
    this.status = status;
    this.start = start;
    this.IsTicketed = IsTicketed;
    this.end = end;
    this.participationFee = participationFee;
    this.description = description;
    this.maxParticipants = maxParticipants;
  }

  static getRandomStatus(): String {
    let statusCode: number;
    statusCode = Math.random();
    if (statusCode > 0.6) {
      return AEventStatus.DRAFT;
    } else if (statusCode <= 0.6 && statusCode >= 0.2) {
      return AEventStatus.PUBLISHED;
    }
    return AEventStatus.CANCELED;
  }

  static getRandomIsTicketed(): boolean {
    let statusCode: number;
    statusCode = Math.random();
    return statusCode > 0.5;
  }

  static copyTrue(event: AEvent): AEvent {
    return Object.assign(new AEvent(), event);
  }

  public equals(nextAevent: AEvent): boolean {
    let thisEvent = JSON.stringify(this);
    let secondEvent = JSON.stringify(nextAevent);
    return thisEvent === secondEvent;
  }
}

export enum AEventStatus {
  DRAFT = "DRAFT",
  PUBLISHED = "PUBLISHED",
  CANCELED = "CANCELED"
}
