import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandboxEditTableRulesComponent } from './sandbox-edit-table-rules.component';

describe('SandboxEditTableRulesComponent', () => {
  let component: SandboxEditTableRulesComponent;
  let fixture: ComponentFixture<SandboxEditTableRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SandboxEditTableRulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SandboxEditTableRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
