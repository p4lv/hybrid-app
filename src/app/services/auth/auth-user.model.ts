export class AuthUser {
  constructor(
    public email: string,
    public id: string,
    public name: string,
    public type: AuthUserType,
  ) {
  }
}

export enum AuthUserType {
  Unknown = 'unknown',
  Guest = 'guest',
  Auth = 'auth',
}
