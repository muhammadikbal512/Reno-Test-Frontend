import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandboxCreateTableRequestsComponent } from './sandbox-create-table-requests.component';

describe('SandboxCreateTableRequestsComponent', () => {
  let component: SandboxCreateTableRequestsComponent;
  let fixture: ComponentFixture<SandboxCreateTableRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SandboxCreateTableRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SandboxCreateTableRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
