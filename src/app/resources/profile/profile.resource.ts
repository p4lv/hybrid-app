import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import { deserialize, ResponseInterface } from '@src/app/resources/profile/get.mapper';
import { ProfileResourceModel } from '@src/app/resources/profile/profile-resource.model';


@Injectable({
  providedIn: 'root'
})
export class ProfileResource {

  constructor() {
  }

  fetch(id: number): Observable<ProfileResourceModel> {
    const fakeResponse: ResponseInterface = {
      rel: 'profile',
      href: 'https://allcasting-api.stage.dyninno.net/api/gta/profiles/40',
      id: '40',
      firstname: 'Vasilij',
      lastname: 'Zhukov'
    };
    return of<ResponseInterface>(fakeResponse).pipe(
      delay(2000),
      map((response): ProfileResourceModel => {
        return deserialize(response);
      })
    );
  }
}
