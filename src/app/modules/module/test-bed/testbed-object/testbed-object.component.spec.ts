import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestbedObjectComponent } from './testbed-object.component';

describe('TestbedObjectComponent', () => {
  let component: TestbedObjectComponent;
  let fixture: ComponentFixture<TestbedObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestbedObjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestbedObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
