import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandboxReportTableComponent } from './sandbox-report-table.component';

describe('SandboxReportTableComponent', () => {
  let component: SandboxReportTableComponent;
  let fixture: ComponentFixture<SandboxReportTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SandboxReportTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SandboxReportTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
