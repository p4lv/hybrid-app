import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EventsRoutingModule} from '@src/app/pages/events/events-routing.module';
import {EventsComponent} from '@src/app/pages/events/events.component';
import {EventsService} from '@src/app/pages/events/events.service';
import {MatProgressBarModule} from '@angular/material';
import {EventCardModule} from '@src/app/components/event-card/event-card.module';


@NgModule({
  declarations: [EventsComponent],
  imports: [
    CommonModule,
    EventsRoutingModule,
    MatProgressBarModule,
    EventCardModule,
  ],
  providers: [
    EventsService,
  ]
})
export class EventsModule {
}
