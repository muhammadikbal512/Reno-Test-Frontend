import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiteEditGeneralComponent } from './suite-edit-general.component';

describe('SuiteEditGeneralComponent', () => {
  let component: SuiteEditGeneralComponent;
  let fixture: ComponentFixture<SuiteEditGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuiteEditGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiteEditGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
