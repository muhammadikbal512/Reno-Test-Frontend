import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalviewTableComponent } from './functionalview-table.component';

describe('FunctionalviewTableComponent', () => {
  let component: FunctionalviewTableComponent;
  let fixture: ComponentFixture<FunctionalviewTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionalviewTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionalviewTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
