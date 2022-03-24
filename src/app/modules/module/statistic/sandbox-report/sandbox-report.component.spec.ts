import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandboxReportComponent } from './sandbox-report.component';

describe('SandboxReportComponent', () => {
  let component: SandboxReportComponent;
  let fixture: ComponentFixture<SandboxReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SandboxReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SandboxReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
