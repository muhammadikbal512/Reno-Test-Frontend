import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandboxEditTableGeneralComponent } from './sandbox-edit-table-general.component';

describe('SandboxEditTableGeneralComponent', () => {
  let component: SandboxEditTableGeneralComponent;
  let fixture: ComponentFixture<SandboxEditTableGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SandboxEditTableGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SandboxEditTableGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
