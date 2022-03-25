import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandboxCreateTableRulesComponent } from './sandbox-create-table-rules.component';

describe('SandboxCreateTableRulesComponent', () => {
  let component: SandboxCreateTableRulesComponent;
  let fixture: ComponentFixture<SandboxCreateTableRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SandboxCreateTableRulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SandboxCreateTableRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
