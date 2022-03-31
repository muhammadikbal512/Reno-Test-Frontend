import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceReportTableComponent } from './performance-report-table.component';

describe('PerformanceReportTableComponent', () => {
  let component: PerformanceReportTableComponent;
  let fixture: ComponentFixture<PerformanceReportTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerformanceReportTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceReportTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
