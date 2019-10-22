import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '@src/app/pages/login/login.routes';
import { LoginService } from '@src/app/pages/login/login.service';


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [LoginService],
})
export class LoginRoutingModule {
}
