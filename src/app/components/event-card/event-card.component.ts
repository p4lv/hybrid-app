import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Event} from '@src/app/resources/event/event.model';

@Component({
  selector: 'bjk-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventCardComponent implements OnInit {
  private cardSrc: Event;

  constructor() {
  }

  ngOnInit() {
  }

  @Input()
  set card(card: Event) {
    this.cardSrc = card;
  }

  get card(): Event {
    return this.cardSrc;
  }
}
