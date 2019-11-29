import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {routes} from '@src/app/pages/events/events.routes';


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule {
}
