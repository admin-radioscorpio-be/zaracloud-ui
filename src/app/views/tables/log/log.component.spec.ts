import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CardModule, GridModule, TableModule, UtilitiesModule } from '@coreui/angular';
import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from '../../../icons/icon-subset';
import { LogComponent } from './log.component';

describe('TablesComponent', () => {
  let component: LogComponent;
  let fixture: ComponentFixture<LogComponent>;
  let iconSetService: IconSetService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [GridModule, CardModule, TableModule, GridModule, UtilitiesModule, RouterTestingModule, LogComponent],
    providers: [IconSetService]
})
    .compileComponents();
  });

  beforeEach(() => {
    iconSetService = TestBed.inject(IconSetService);
    iconSetService.icons = { ...iconSubset };

    fixture = TestBed.createComponent(LogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
