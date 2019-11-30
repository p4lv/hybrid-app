import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EventCardComponent} from '@src/app/components/event-card/event-card.component';
import {MatButtonModule, MatCardModule, MatIconModule} from '@angular/material';


@NgModule({
  declarations: [EventCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [EventCardComponent],
})
export class EventCardModule {
}
