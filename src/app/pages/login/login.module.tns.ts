import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { LoginRoutingModule } from '@src/app/pages/login/login-routing.module';
import { LoginComponent } from '@src/app/pages/login/login.component';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    LoginRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class LoginModule {
}
