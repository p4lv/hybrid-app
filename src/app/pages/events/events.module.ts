import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EventsRoutingModule} from '@src/app/pages/events/events-routing.module';
import {EventsComponent} from '@src/app/pages/events/events.component';
import {EventsService} from '@src/app/pages/events/events.service';
import {MatButtonModule, MatCardModule, MatGridListModule, MatIconModule, MatProgressBarModule} from '@angular/material';


@NgModule({
  declarations: [EventsComponent],
  imports: [
    CommonModule,
    EventsRoutingModule,
    MatProgressBarModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [
    EventsService,
  ]
})
export class EventsModule {
}
