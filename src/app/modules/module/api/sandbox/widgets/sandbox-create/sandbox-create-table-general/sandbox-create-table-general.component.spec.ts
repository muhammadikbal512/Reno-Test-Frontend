import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandboxCreateTableGeneralComponent } from './sandbox-create-table-general.component';

describe('SandboxCreateTableGeneralComponent', () => {
  let component: SandboxCreateTableGeneralComponent;
  let fixture: ComponentFixture<SandboxCreateTableGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SandboxCreateTableGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SandboxCreateTableGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
