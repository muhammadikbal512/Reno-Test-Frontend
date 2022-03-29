import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandboxEditTableAdvanceComponent } from './sandbox-edit-table-advance.component';

describe('SandboxEditTableAdvanceComponent', () => {
  let component: SandboxEditTableAdvanceComponent;
  let fixture: ComponentFixture<SandboxEditTableAdvanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SandboxEditTableAdvanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SandboxEditTableAdvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
