import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptCreateTableGeneralComponent } from './script-create-table-general.component';

describe('ScriptCreateTableGeneralComponent', () => {
  let component: ScriptCreateTableGeneralComponent;
  let fixture: ComponentFixture<ScriptCreateTableGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScriptCreateTableGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptCreateTableGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
