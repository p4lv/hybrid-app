import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { EventCardComponent } from '@src/app/components/event-card/event-card.component';



@NgModule({
  declarations: [EventCardComponent],
  imports: [
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class EventCardModule { }
