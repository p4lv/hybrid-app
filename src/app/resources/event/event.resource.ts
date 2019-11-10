import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {switchMap} from 'rxjs/operators';

import {environment} from '@src/environments/environment';
import * as EventNs from '@src/app/resources/event/index';



@Injectable({
  providedIn: 'root'
})
export class EventResource {
  static deserialize(response: EventNs.ResponseInterface): Observable<EventNs.Event> {
    return of(EventNs.deserialize(response));
  }

  constructor(
    private http: HttpClient,
  ) {

  }

  public getEvent(id: number) {
    const href = `${environment.api}/event/${id}`;
    return this.http.get<EventNs.ResponseInterface>(href)
      .pipe(
        switchMap(response => {
          return EventResource.deserialize(response);
        })
      );
  }
}
