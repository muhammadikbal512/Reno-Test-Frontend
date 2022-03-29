import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandboxEditComponent } from './sandbox-edit.component';

describe('SandboxEditComponent', () => {
  let component: SandboxEditComponent;
  let fixture: ComponentFixture<SandboxEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SandboxEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SandboxEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
