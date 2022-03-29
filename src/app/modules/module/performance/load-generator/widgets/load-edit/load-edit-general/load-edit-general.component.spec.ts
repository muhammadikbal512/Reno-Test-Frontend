import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadEditGeneralComponent } from './load-edit-general.component';

describe('LoadEditGeneralComponent', () => {
  let component: LoadEditGeneralComponent;
  let fixture: ComponentFixture<LoadEditGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadEditGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadEditGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
