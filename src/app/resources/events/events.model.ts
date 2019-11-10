export class Events {
  items: Event[];
}

export class Event {
  id: number;
  title: string;
  description: string;
  startDate: EventDate;
  endDate: EventDate;
  paid: boolean;
  openRegistration: boolean;
}

export class EventDate {
  public dateSrc: string; // 2019-09-19 16:20:00.000000
  public timezone: string;
  public date: Date;

  constructor(date: string, timezone: string) {
    this.parseDate(date, timezone);
  }

  private parseDate(date: string, timezone: string) {
    this.dateSrc = date;
    this.date = new Date(date);
    this.timezone = timezone;
  }
}
