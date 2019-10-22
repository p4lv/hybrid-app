import { ProfileResourceModel } from '@src/app/resources/profile/profile-resource.model';

export interface ResponseInterface {
  rel: string;
  href: string;
  id: string;
  firstname: string;
  lastname: string;
}

export function deserialize(response: ResponseInterface): ProfileResourceModel {
  const profile = new ProfileResourceModel();
  profile.rel = response.rel;
  profile.id = parseInt(response.id, 10);
  profile.firstName = response.firstname;
  profile.lastName = response.lastname;
  return profile;
}
