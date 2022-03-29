import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalviewChartComponent } from './functionalview-chart.component';

describe('FunctionalviewChartComponent', () => {
  let component: FunctionalviewChartComponent;
  let fixture: ComponentFixture<FunctionalviewChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionalviewChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionalviewChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
