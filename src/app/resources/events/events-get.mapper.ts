import {Event, EventDate, Events} from '@src/app/resources/events/events.model';

export interface ResponseInterface {
  metadata: {
    limit: number;
    route: string;
  };
  code: number;
  data: {
    events: EventResponseInterface[];
  };
}

export interface EventResponseInterface {
  title: string;
  id: number;
  starts_at: EventDateResponseInterface;
  ends_at: EventDateResponseInterface;
  description: string;
  is_registration_open: boolean;
  is_paid: boolean;
}

export interface EventDateResponseInterface {
  date: string; // 2019-09-19 16:20:00.000000
  timezone_type: number;
  timezone: string;
}

export function deserialize(response: ResponseInterface): Events {
  const events = new Events();
  events.items = [];
  for (const index of Object.keys(response.data.events)) {
    events.items.push(deserializeEvent(response.data.events[index]));
  }

  return events;
}

export function deserializeEvent(eventResponse: EventResponseInterface): Event {
  const event = new Event();
  event.id = eventResponse.id;
  event.title = eventResponse.title;
  event.description = eventResponse.description;
  event.startDate = new EventDate(eventResponse.starts_at.date, eventResponse.starts_at.timezone);
  event.endDate = new EventDate(eventResponse.ends_at.date, eventResponse.ends_at.timezone);
  event.paid = eventResponse.is_paid;
  event.openRegistration = eventResponse.is_registration_open;
  return event;
}
