import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalReportComponent } from './functional-report.component';

describe('FunctionalReportComponent', () => {
  let component: FunctionalReportComponent;
  let fixture: ComponentFixture<FunctionalReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionalReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionalReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
