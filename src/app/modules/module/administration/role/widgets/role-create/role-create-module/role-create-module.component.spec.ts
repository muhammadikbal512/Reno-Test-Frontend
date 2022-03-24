import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleCreateModuleComponent } from './role-create-module.component';

describe('RoleCreateModuleComponent', () => {
  let component: RoleCreateModuleComponent;
  let fixture: ComponentFixture<RoleCreateModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoleCreateModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleCreateModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
