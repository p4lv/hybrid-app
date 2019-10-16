import { AuthUser, AuthUserType } from '@src/app/services/auth/auth-user.model';

export const Guest: AuthUser = new AuthUser(
  '',
  '0',
  'Guest Avo',
  AuthUserType.Guest,
);
export const Unknown: AuthUser = new AuthUser(
  '',
  '0',
  'Don T. Know',
  AuthUserType.Unknown,
);
