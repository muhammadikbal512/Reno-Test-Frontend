import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptEditTableGeneralComponent } from './script-edit-table-general.component';

describe('ScriptEditTableGeneralComponent', () => {
  let component: ScriptEditTableGeneralComponent;
  let fixture: ComponentFixture<ScriptEditTableGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScriptEditTableGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptEditTableGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
