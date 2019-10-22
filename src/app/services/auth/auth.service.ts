import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs';
import { AuthUser, AuthUserType } from '@src/app/services/auth/auth-user.model';
import { delay, filter, finalize } from 'rxjs/operators';
import { Guest, Unknown } from '@src/app/services/auth/auth-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {
  private readonly authUserSubject = new BehaviorSubject<AuthUser>(Unknown);
  private userFetchingSubscription = new Subscription();
  private localUserSubscription = new Subscription();
  private loadingState = new BehaviorSubject<boolean>(true);

  constructor() {
    this.localUserSubscription = this.getLocalUser().subscribe(
      user => {
        if (user) {
          this.authUserSubject.next(user);
        } else {
          this.authUserSubject.next(Guest);
        }
        this.loadingState.next(false);
      }
    );

    this.authUser.pipe(delay(5000)).subscribe(user => {
      if (user.type !== AuthUserType.guest) {
        this.logout();
      }
    });
  }

  ngOnDestroy(): void {
    this.userFetchingSubscription.unsubscribe();
    this.localUserSubscription.unsubscribe();
  }

  get authUser(): Observable<AuthUser> {
    return this.authUserSubject.pipe(
      filter((user: AuthUser) => user !== Unknown),
    );
  }

  get isLoading(): Observable<boolean> {
    return this.loadingState;
  }

  public login(user: AuthUser) {
    this.loadingState.next(true);
    this.userFetchingSubscription.unsubscribe();

    this.userFetchingSubscription = of<AuthUser>(user)
      .pipe(
        delay(2000),
        finalize(() => {
          this.userFetchingSubscription.unsubscribe();
        }),
      )
      .subscribe(fakeUser => {
          this.authUserSubject.next(fakeUser);
          this.loadingState.next(false);
        }
      );
  }

  public logout() {
    this.authUserSubject.next(Guest);
  }

  private getLocalUser(): Observable<AuthUser | null> {
    const authUser = new AuthUser('autologin@user.net', '2543', 'Autos Loginov', AuthUserType.auth);
    return of(authUser).pipe(delay(2000));
  }

}
