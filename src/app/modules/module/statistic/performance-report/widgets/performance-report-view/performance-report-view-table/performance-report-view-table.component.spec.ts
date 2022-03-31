import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceReportViewTableComponent } from './performance-report-view-table.component';

describe('PerformanceReportViewTableComponent', () => {
  let component: PerformanceReportViewTableComponent;
  let fixture: ComponentFixture<PerformanceReportViewTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerformanceReportViewTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceReportViewTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
