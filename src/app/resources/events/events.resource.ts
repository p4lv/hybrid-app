import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

import {environment} from '@src/environments/environment';
import {deserialize as deserializeEvents, ResponseInterface} from '@src/app/resources/events/events-get.mapper';
import {Events} from '@src/app/resources/events/events.model';

@Injectable({
  providedIn: 'root',
})
export class EventsResource {
  static deserialize(response: ResponseInterface): Observable<Events> {
    return of(deserializeEvents(response));
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
