import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandboxCreateTableClientComponent } from './sandbox-create-table-client.component';

describe('SandboxCreateTableClientComponent', () => {
  let component: SandboxCreateTableClientComponent;
  let fixture: ComponentFixture<SandboxCreateTableClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SandboxCreateTableClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SandboxCreateTableClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
