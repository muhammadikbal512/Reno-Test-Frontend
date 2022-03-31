import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandboxReportViewTableComponent } from './sandbox-report-view-table.component';

describe('SandboxReportViewTableComponent', () => {
  let component: SandboxReportViewTableComponent;
  let fixture: ComponentFixture<SandboxReportViewTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SandboxReportViewTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SandboxReportViewTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
