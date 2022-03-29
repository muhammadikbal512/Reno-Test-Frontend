import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptEditTableActionsComponent } from './script-edit-table-actions.component';

describe('ScriptEditTableActionsComponent', () => {
  let component: ScriptEditTableActionsComponent;
  let fixture: ComponentFixture<ScriptEditTableActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScriptEditTableActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptEditTableActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
