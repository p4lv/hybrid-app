import {Event, EventDate} from '@src/app/resources/event/event.model';

export interface ResponseInterface {
  metadata: {
    route: string;
  };
  code: number;
  data: EventResponseInterface;
}

export interface EventResponseInterface {
  title: string;
  id: number;
  starts_at: EventDateResponseInterface;
  ends_at: EventDateResponseInterface;
  description: string;
  is_registration_open: boolean;
  is_paid: boolean;
  attenders: string[];
}


export interface EventDateResponseInterface {
  date: string; // 2019-09-19 16:20:00.000000
  timezone_type: number;
  timezone: string;
}

export function deserialize(response: ResponseInterface): Event {
  const event = new Event();
  event.id = response.data.id;
  event.title = response.data.title;
  event.description = response.data.description;
  event.startDate = new EventDate(response.data.starts_at.date, response.data.starts_at.timezone);
  event.endDate = new EventDate(response.data.ends_at.date, response.data.ends_at.timezone);
  event.paid = response.data.is_paid;
  event.openRegistration = response.data.is_registration_open;
  event.attenders = response.data.attenders;
  return event;
}
