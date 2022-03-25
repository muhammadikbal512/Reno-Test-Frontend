import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandboxTableComponent } from './sandbox-table.component';

describe('SandboxTableComponent', () => {
  let component: SandboxTableComponent;
  let fixture: ComponentFixture<SandboxTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SandboxTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SandboxTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
