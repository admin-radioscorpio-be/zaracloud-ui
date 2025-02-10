import { Component } from '@angular/core';
import { DocsExampleComponent } from '@docs-components/public-api';
import { RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, TableDirective, TableColorDirective, TableActiveDirective, BorderDirective, AlignDirective } from '@coreui/angular';

import { SchedulerService } from '../../../services/scheduler.service';
import { SchedulerResponse, EventWrapper, TaskEvent, ScheduledEvent } from '../../../models/event.model';
import { NgFor } from "@angular/common";
import { NgIf } from "@angular/common";




@Component({
    selector: 'scheduler-tables',
    templateUrl: './scheduler.component.html',
    styleUrls: ['./scheduler.component.scss'],
    imports: [NgIf, NgFor, RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, TableDirective, TableColorDirective, TableActiveDirective, BorderDirective, AlignDirective]
})
export class SchedulerComponent {
  schedulerData!: SchedulerResponse;
  events: EventWrapper[] = [];

  constructor(private schedulerService: SchedulerService) {}

  ngOnInit(): void {
    this.schedulerService.getSchedulerData().subscribe({
      next: (data) => {
        this.schedulerData = data;
        this.events = data.events;
        console.log(data);
      },
      error: (err) => console.error('Error fetching scheduler data', err)
    });
  }

  // Type Guard to check if the item is a ScheduledEvent (Event)
  isScheduledEvent(item: TaskEvent | ScheduledEvent): item is ScheduledEvent {
    return (item as ScheduledEvent).fichero !== undefined;
  }


}
