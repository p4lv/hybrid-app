import {HttpParams} from '@angular/common/http';

export interface RequestInterface {
  new_application: {
    happening: number;
    attender: {
      firstName: string;
      lastName: string;
      gender: number;
      avatar: string; // img
      countryOfLiving: string;
      dateOfBirth: {
        year: number;
        month: number;
        day: number;
      }
      facebookLink: string;
      languages: string[];
      allowToShare: number;
      jobTitle: string;
      email: string;
      phone: string;
      fieldOfWork: number;
      knowFrom: number;
    };
    dietaryRequirements: string;
    accommodation: string;
    accommodationComments: string;
    save: string;
    _token: string;
  };
}

export function serialize(application: any): any {
  const app = {
    happening: 1,
  attender: {
    firstName: 'Vasilijs',
    lastName: 'Zukovs',
    gender: 1,
    avatar: 'Joseph_Portrait_Steeven_Shaw.jpg', // img
    countryOfLiving: 'Latvia',
    dateOfBirth: {
      year: 1984,
      month: 3,
      day: 12,
    },
    facebookLink: 'piupiu',
    languages: ['English', 'Latvian'],
    jobTitle: 'Frontend',
    email: 'vasilij@zhukov.lv',
    phone: '+12312345678',
    fieldOfWork: 1,
    knowFrom: 2,
  },
  dietaryRequirements: 'Some requirements',
  accommodation: 'Some Accommodation',
  accommodationComments: 'Some Accommodation Comments',
  save: '',
  _token: 'wtok82SDuLJ8EaYYnx_0gJpueQGAZtXh28nyvQRH7fc',
  };
  // const params = new HttpParams()
  //   .append('new_application', application);
  return app;
}
// new_application[happening]: 1
// new_application[attender][firstName]: Vasilijs
// new_application[attender][lastName]: Zukovs
// new_application[attender][gender]: 1
// new_application[attender][avatar]: Joseph_Portrait_Steeven_Shaw.jpg
// new_application[attender][countryOfLiving]: Latvia
// new_application[attender][dateOfBirth][month]: 2
// new_application[attender][dateOfBirth][day]: 3
// new_application[attender][dateOfBirth][year]: 1901
// new_application[attender][facebookLink]: Pumpurum
// new_application[attender][languages][]: English
// new_application[attender][languages][]: Latvian
// new_application[attender][languages][]: Russian
// new_application[attender][allowToShare]: 1
// new_application[attender][jobTitle]: Frontend
// new_application[attender][email]: vasilij@zhukov.lv
// new_application[attender][phone]: +12312345678
// new_application[attender][fieldOfWork]: 1
// new_application[attender][knowFrom]: 3
// new_application[dietaryRequirements]: Some requirements
// new_application[accommodation]: Some Accommodation
// new_application[accommodationComments]: Some Accommodation Comments
// new_application[save]:
// new_application[_token]: wtok82SDuLJ8EaYYnx_0gJpueQGAZtXh28nyvQRH7fc


// new_application[happening]: 1
// new_application[attender][firstName]:
// new_application[attender][lastName]:
// new_application[attender][gender]: 0
// new_application[attender][avatar]:
// new_application[attender][countryOfLiving]:
// new_application[attender][dateOfBirth][month]: 1
// new_application[attender][dateOfBirth][day]: 1
// new_application[attender][dateOfBirth][year]: 1899
// new_application[attender][facebookLink]:
// new_application[attender][jobTitle]:
// new_application[attender][email]: test-x-001@mail.ru
// new_application[attender][phone]: 1234123434
// new_application[attender][fieldOfWork]: 1
// new_application[attender][knowFrom]:
// new_application[dietaryRequirements]:
// new_application[accommodation]:
// new_application[accommodationComments]:
// new_application[save]:
// new_application[_token]: wtok82SDuLJ8EaYYnx_0gJpueQGAZtXh28nyvQRH7fc
