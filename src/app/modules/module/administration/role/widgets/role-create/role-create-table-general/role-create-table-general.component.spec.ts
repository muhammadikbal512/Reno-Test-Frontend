import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleCreateTableGeneralComponent } from './role-create-table-general.component';

describe('RoleCreateTableGeneralComponent', () => {
  let component: RoleCreateTableGeneralComponent;
  let fixture: ComponentFixture<RoleCreateTableGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoleCreateTableGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleCreateTableGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
