import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptCreateTableActionsComponent } from './script-create-table-actions.component';

describe('ScriptCreateTableActionsComponent', () => {
  let component: ScriptCreateTableActionsComponent;
  let fixture: ComponentFixture<ScriptCreateTableActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScriptCreateTableActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptCreateTableActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
