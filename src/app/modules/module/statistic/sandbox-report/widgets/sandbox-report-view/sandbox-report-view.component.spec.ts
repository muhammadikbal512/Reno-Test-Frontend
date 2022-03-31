import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandboxReportViewComponent } from './sandbox-report-view.component';

describe('SandboxReportViewComponent', () => {
  let component: SandboxReportViewComponent;
  let fixture: ComponentFixture<SandboxReportViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SandboxReportViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SandboxReportViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
