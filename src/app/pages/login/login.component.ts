import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '@src/app/services/auth/auth.service';
import { AuthUser, AuthUserType } from '@src/app/services/auth/auth-user.model';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'hap-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit, OnDestroy {
  public user: AuthUser;
  private authUserSubscription = new Subscription();

  constructor(
    private authService: AuthService,
    private changeDetector: ChangeDetectorRef,
  ) {
  }

  ngOnInit(): void {
    this.authUserSubscription = this.authService.authUser
      .subscribe(
        user => {
          this.handleUserChange(user);
        }
      );
  }

  ngOnDestroy(): void {
    if (this.authUserSubscription) {
      this.authUserSubscription.unsubscribe();
    }
  }

  public isUserLoading(): Observable<boolean> {
    return this.authService.isLoading;
  }

  handleLoginClick(): void {
    const rand = ((max) => {
      return Math.floor(Math.random() * Math.floor(max));
    })(200);
    const user = new AuthUser(
      `testmail-${rand}@somemail.test`,
      rand.toString(),
      `Test User ${rand}`,
      AuthUserType.Auth
    );
    this.authService.login(user);
  }

  public handleLogoutClick(): void {
    this.authService.logout();
  }

  public isGuest(): boolean {
    return this.user.type === AuthUserType.Guest;
  }

  private handleUserChange(user: AuthUser): void {
    this.user = user;
    this.changeDetector.markForCheck();
  }

}
