import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandboxCreateTableAdvanceComponent } from './sandbox-create-table-advance.component';

describe('SandboxCreateTableAdvanceComponent', () => {
  let component: SandboxCreateTableAdvanceComponent;
  let fixture: ComponentFixture<SandboxCreateTableAdvanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SandboxCreateTableAdvanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SandboxCreateTableAdvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
