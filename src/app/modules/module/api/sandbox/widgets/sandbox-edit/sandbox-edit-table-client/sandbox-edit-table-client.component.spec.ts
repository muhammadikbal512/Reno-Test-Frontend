import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandboxEditTableClientComponent } from './sandbox-edit-table-client.component';

describe('SandboxEditTableClientComponent', () => {
  let component: SandboxEditTableClientComponent;
  let fixture: ComponentFixture<SandboxEditTableClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SandboxEditTableClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SandboxEditTableClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
