import { Injectable, OnInit } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { ProfileResource } from '@src/app/resources/profile/profile.resource';

@Injectable()
export class LoginService {
  private profileSubject = new ReplaySubject<any>(1);

  constructor(private profileResource: ProfileResource) {
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
  }

}
