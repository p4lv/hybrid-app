import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '@src/app/pages/login/login.routes';


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {
}
