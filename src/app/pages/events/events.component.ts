import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';
import {finalize} from 'rxjs/operators';
import {EventsService} from '@src/app/pages/events/events.service';
import {Event} from '@src/app/resources/events/events.model';

@Component({
  selector: 'bjk-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventsComponent implements OnInit, OnDestroy {
  private eventsLoadingSubject = new BehaviorSubject<boolean>(false);
  private eventsSubscription = new Subscription();
  private eventsSource: Event[] = [];

  constructor(
    private eventsService: EventsService,
    private changeDetector: ChangeDetectorRef,
  ) {
  }

  ngOnInit() {
    this.fetchEvents();
  }

  ngOnDestroy(): void {
    this.eventsSubscription.unsubscribe();
  }

  get eventsLoading(): Observable<boolean> {
    return this.eventsLoadingSubject;
  }

  get events() {
    return [...this.eventsSource];
  }

  private fetchEvents() {
    this.eventsLoadingSubject.next(true);
    this.eventsSubscription.unsubscribe();
    this.eventsSubscription = this.eventsService.getEvents().pipe(
      finalize(() => {
        this.eventsLoadingSubject.next(false);
        this.changeDetector.markForCheck();
      })
    ).subscribe(
      events => {
        this.eventsSource = events;
      }
    );
  }
}
