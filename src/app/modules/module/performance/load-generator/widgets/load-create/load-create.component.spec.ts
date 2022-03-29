import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadCreateComponent } from './load-create.component';

describe('LoadCreateComponent', () => {
  let component: LoadCreateComponent;
  let fixture: ComponentFixture<LoadCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
