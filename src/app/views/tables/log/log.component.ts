import { Component } from '@angular/core';
import { DocsExampleComponent } from '@docs-components/public-api';
import { RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, TableDirective, TableColorDirective, TableActiveDirective, BorderDirective, AlignDirective } from '@coreui/angular';


import { LoggerService } from '../../../services/logger.service';
import { LoggerResponse, Track} from '../../../models/track.model';
import { NgFor } from "@angular/common";
import { NgIf } from "@angular/common";

import {ChangeDetectionStrategy} from '@angular/core';
import {DateAdapter, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepickerIntl, MatDatepickerInputEvent, MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';

import { ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'log-tables',
    templateUrl: './log.component.html',
    styleUrls: ['./log.component.scss'],
    providers: [provideNativeDateAdapter(), {provide: MAT_DATE_LOCALE, useValue: 'fr'},],
    imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, NgFor, NgIf, RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, TableDirective, TableColorDirective, TableActiveDirective, BorderDirective, AlignDirective],
    changeDetection: ChangeDetectionStrategy.OnPush,
  })


export class LogComponent {
  loggerData!: LoggerResponse;
  tracks: Track[] = [];
  selectedDate: string = '';

  constructor(private loggerService: LoggerService, private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loggerService.getLoggerData().subscribe({
      next: (data) => {
        //this.loggerData = data;
        this.tracks = data;
        console.log("beire");
        console.log(this.tracks);
        console.log("pap");
        this.cdRef.markForCheck();
      },
      error: (err) => console.error('Error fetching logger data', err)
    });
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    if (event.value) {
      const localDate = event.value.toLocaleDateString('en-CA'); // Ensures YYYY-MM-DD format
      this.selectedDate = localDate;
    
      //this.selectedDate = event.value.toISOString().split('T')[0]; // Convert to YYYY-MM-DD format
      console.log('Formatted Date:', this.selectedDate);
      this.fetchLogs();
    }
  }

  fetchLogs() {
    this.loggerService.getLoggerData(this.selectedDate).subscribe((data) => {
      console.log('Received log data:', data);
      this.tracks = data;
    });
  }



}
