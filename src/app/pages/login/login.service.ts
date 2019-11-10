import {Injectable} from '@angular/core';
import {Observable, ReplaySubject} from 'rxjs';
import {ProfileResource} from '@src/app/resources/profile/profile.resource';
import {EventsResource} from '@src/app/resources/events/index';
import {EventResource} from '@src/app/resources/event/event.resource';

@Injectable()
export class LoginService {
  private profileSubject = new ReplaySubject<any>(1);

  constructor(
    private profileResource: ProfileResource,
    private eventsResource: EventsResource,
    private eventResource: EventResource,
  ) {
    this.fetchProfile();
  }

  get profile(): Observable<any> {
    return this.profileSubject;
  }

  private fetchProfile() {
    this.profileResource.fetch(22).subscribe(
      profile => {
        this.profileSubject.next(profile);
      }
    );
    this.eventsResource.getEvents().subscribe(
      events => {
        console.log(events);
      }
    );
    this.eventResource.getEvent(1).subscribe(
      event => {
        console.log(event);
      },
      error => {
        console.log(error);
      }
    );
  }

}
