import {Injectable} from '@angular/core';
import {EventsResource} from '@src/app/resources/events/events.resource';
import {Event} from '@src/app/resources/events/events.model';
import {delay, map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable()
export class EventsService {
  constructor(
    private eventsResource: EventsResource,
  ) {

  }

  public getEvents(): Observable<Event[]> {
    return this.eventsResource.getEvents().pipe(
      map(response => {
        const events = response.items;
        events.sort((a, b) => a.startDate.date.getTime() - b.startDate.date.getTime());
        return events;
      })
    );
  }
}
