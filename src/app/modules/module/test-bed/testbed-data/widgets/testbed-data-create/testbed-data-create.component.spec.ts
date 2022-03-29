import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestbedDataCreateComponent } from './testbed-data-create.component';

describe('TestbedDataCreateComponent', () => {
  let component: TestbedDataCreateComponent;
  let fixture: ComponentFixture<TestbedDataCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestbedDataCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestbedDataCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
