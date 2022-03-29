import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalViewComponent } from './functional-view.component';

describe('FunctionalViewComponent', () => {
  let component: FunctionalViewComponent;
  let fixture: ComponentFixture<FunctionalViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionalViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
