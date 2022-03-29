import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestbedSuiteComponent } from './testbed-suite.component';

describe('TestbedSuiteComponent', () => {
  let component: TestbedSuiteComponent;
  let fixture: ComponentFixture<TestbedSuiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestbedSuiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestbedSuiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
