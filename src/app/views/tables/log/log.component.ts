import { Component } from '@angular/core';
import { DocsExampleComponent } from '@docs-components/public-api';
import { RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, TableDirective, TableColorDirective, TableActiveDirective, BorderDirective, AlignDirective } from '@coreui/angular';


import { LoggerService } from '../../../services/logger.service';
import { LoggerResponse, Track} from '../../../models/track.model';
import { NgFor } from "@angular/common";
import { NgIf } from "@angular/common";



@Component({
    selector: 'log-tables',
    templateUrl: './log.component.html',
    styleUrls: ['./log.component.scss'],
    imports: [NgFor, NgIf, RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, TableDirective, TableColorDirective, TableActiveDirective, BorderDirective, AlignDirective]
})


export class LogComponent {
  loggerData!: LoggerResponse;
  tracks: Track[] = [];

  constructor(private loggerService: LoggerService) {}

  ngOnInit(): void {
    this.loggerService.getLoggerData().subscribe({
      next: (data) => {
        //this.loggerData = data;
        this.tracks = data;
        console.log("beire");
        console.log(this.tracks);
        console.log("pap");
      },
      error: (err) => console.error('Error fetching logger data', err)
    });
  }



}
