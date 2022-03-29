import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadEditTimeComponent } from './load-edit-time.component';

describe('LoadEditTimeComponent', () => {
  let component: LoadEditTimeComponent;
  let fixture: ComponentFixture<LoadEditTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadEditTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadEditTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
