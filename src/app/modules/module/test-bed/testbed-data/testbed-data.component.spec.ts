import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestbedDataComponent } from './testbed-data.component';

describe('TestbedDataComponent', () => {
  let component: TestbedDataComponent;
  let fixture: ComponentFixture<TestbedDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestbedDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestbedDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
