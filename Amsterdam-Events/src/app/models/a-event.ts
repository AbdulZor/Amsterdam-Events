export class AEvent {
  title: string;
  status: AEventStatus;
  start: Date;
  IsTicketed: boolean;
  end: Date;
  participationFee: number;
  description: string;
  maxParticipants: string;


  constructor(title: string, status: AEventStatus, start: Date, IsTicketed: boolean,
              end: Date, participationFee: number, description: string, maxParticipants: string) {
    this.title = title;
    this.status = status;
    this.start = start;
    this.IsTicketed = IsTicketed;
    this.end = end;
    this.participationFee = participationFee;
    this.description = description;
    this.maxParticipants = maxParticipants;
  }

  static getRandomStatus(): AEventStatus {
    let statusCode: number;
    statusCode = Math.random();
    if (statusCode > 0.6) {
      return AEventStatus.DRAFT;
    } else if (statusCode <= 0.6 && statusCode >= 0.2) {
      return AEventStatus.PUBLISHED;
    }
    return AEventStatus.CANCELED;
  }

  static copyTrue(event: AEvent): AEvent {
    return Object.assign(new AEvent(null, null, null, null, null,
      null, null, null), event);
  }

  public equals(nextAevent: AEvent): boolean {
    return this.title == nextAevent.title && this.status == nextAevent.status &&
      this.maxParticipants == nextAevent.maxParticipants && this.IsTicketed == nextAevent.IsTicketed &&
      this.participationFee == nextAevent.participationFee && this.description == nextAevent.description &&
      this.start == nextAevent.start && this.end == nextAevent.end;
  }
}

export enum AEventStatus {
  DRAFT = "DRAFT",
  PUBLISHED = "PUBLISHED",
  CANCELED = "CANCELED"
}
