import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

import * as EventsNs from '@src/app/resources/events/events-get.mapper';
import {ResponseInterface} from '@src/app/resources/events/events-get.mapper';
import {Events} from '@src/app/resources/events/events.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '@src/environments/environment';
import {switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EventsResource {
  static deserialize(response: ResponseInterface): Observable<Events> {
    return of(EventsNs.deserialize(response));
  }

  constructor(
    private http: HttpClient,
  ) {
  }

  public getEvents() {
    const href = `${environment.api}/`;
    return this.http.get<ResponseInterface>(href)
      .pipe(
        switchMap(response => {
          return EventsResource.deserialize(response);
        })
      );
  }
}
