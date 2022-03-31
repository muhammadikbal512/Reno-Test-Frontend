import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceReportViewComponent } from './performance-report-view.component';

describe('PerformanceReportViewComponent', () => {
  let component: PerformanceReportViewComponent;
  let fixture: ComponentFixture<PerformanceReportViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerformanceReportViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceReportViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
