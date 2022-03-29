import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestbedScriptComponent } from './testbed-script.component';

describe('TestbedScriptComponent', () => {
  let component: TestbedScriptComponent;
  let fixture: ComponentFixture<TestbedScriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestbedScriptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestbedScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
