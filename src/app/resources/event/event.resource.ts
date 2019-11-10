import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {switchMap} from 'rxjs/operators';

import {environment} from '@src/environments/environment';
import {deserialize as deserializeEvent, ResponseInterface} from '@src/app/resources/event/event-get.mapper';
import {Event} from '@src/app/resources/event/event.model';


@Injectable({
  providedIn: 'root'
})
export class EventResource {
  static deserialize(response: ResponseInterface): Observable<Event> {
    return of(deserializeEvent(response));
  }

  constructor(
    private http: HttpClient,
  ) {

  }

  public getEvent(id: number) {
    const href = `${environment.api}/event/${id}`;
    return this.http.get<ResponseInterface>(href)
      .pipe(
        switchMap(response => {
          return EventResource.deserialize(response);
        })
      );
  }
}
