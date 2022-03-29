import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiteCreateGeneralComponent } from './suite-create-general.component';

describe('SuiteCreateGeneralComponent', () => {
  let component: SuiteCreateGeneralComponent;
  let fixture: ComponentFixture<SuiteCreateGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuiteCreateGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiteCreateGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
