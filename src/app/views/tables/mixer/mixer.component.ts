import { Component } from '@angular/core';
import { DocsExampleComponent } from '@docs-components/public-api';
import { RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, TableDirective, TableColorDirective, TableActiveDirective, BorderDirective, AlignDirective } from '@coreui/angular';

import { MixerService } from '../../../services/mixer.service';
import { MixerStatus } from '../../../models/mixer.model';
import { NgFor } from "@angular/common";
import { NgIf } from "@angular/common";


@Component({
    selector: 'mixer-tables',
    templateUrl: './mixer.component.html',
    styleUrls: ['./mixer.component.scss'],
    imports: [NgIf, NgFor, RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, TableDirective, TableColorDirective, TableActiveDirective, BorderDirective, AlignDirective]
})
export class MixerComponent {
  mixerData!: MixerStatus;


  constructor(private mixerService: MixerService) {}

  ngOnInit(): void {
    this.mixerService.getMixerData().subscribe({
      next: (data) => {
        //this.loggerData = data;
        this.mixerData = data;
        console.log("beire");
        console.log(this.mixerData);
        console.log("pap");
      },
      error: (err) => console.error('Error fetching logger data', err)
    });
  }

  formatTime(seconds: number | null): string {
    if (seconds === null) return '';
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    return h > 0 ? `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}` : `${m}:${s.toString().padStart(2, '0')}`;
  }

}
