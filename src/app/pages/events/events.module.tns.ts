import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { EventsRoutingModule } from '@src/app/pages/events/events-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { EventsComponent } from '@src/app/pages/events/events.component';


@NgModule({
  declarations: [EventsComponent],
  imports: [
    EventsRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class EventsModule { }
