import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CardModule, GridModule, TableModule, UtilitiesModule } from '@coreui/angular';
import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from '../../../icons/icon-subset';
import { SchedulerComponent } from './scheduler.component';

describe('SchedulerComponent', () => {
  let component: SchedulerComponent; 
  let fixture: ComponentFixture<SchedulerComponent>;
  let iconSetService: IconSetService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [GridModule, CardModule, TableModule, GridModule, UtilitiesModule, RouterTestingModule, SchedulerComponent],
    providers: [IconSetService]
})
    .compileComponents();
  });

  beforeEach(() => {
    iconSetService = TestBed.inject(IconSetService);
    iconSetService.icons = { ...iconSubset };

    fixture = TestBed.createComponent(SchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
