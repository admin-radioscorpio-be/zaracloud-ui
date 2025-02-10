import { Component } from '@angular/core';
import { DocsExampleComponent } from '@docs-components/public-api';
import { RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, TableDirective, TableColorDirective, TableActiveDirective, BorderDirective, AlignDirective } from '@coreui/angular';


import { QueueService } from '../../../services/queue.service';
import { QueueResponse, QueueTrack } from '../../../models/queue.model';
import { NgFor } from "@angular/common";
import { NgIf } from "@angular/common";



@Component({
    selector: 'queue-tables',
    templateUrl: './queue.component.html',
    styleUrls: ['./queue.component.scss'],
    imports: [NgFor, NgIf, RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, TableDirective, TableColorDirective, TableActiveDirective, BorderDirective, AlignDirective]
})
export class QueueComponent {
  queueData!: QueueResponse;
  tracks: QueueTrack[] = [];
  current_track: QueueTrack = {
    "data": {
        "fade_duration": 0,
        "filename": "",
        "prefix": ""
    },
    "name": "",
    "next": ""
};

  constructor(private queueService: QueueService) {}

  ngOnInit(): void {
    this.queueService.getQueueData().subscribe({
      next: (data) => {
        this.queueData = data;
        this.current_track = data.current;
        this.tracks = data.first_10_tracks;
        console.log("Beire")
        console.log(data);
        console.log("Queue")
        
      },
      error: (err) => console.error('Error fetching scheduler data', err)
    });
  }


}
