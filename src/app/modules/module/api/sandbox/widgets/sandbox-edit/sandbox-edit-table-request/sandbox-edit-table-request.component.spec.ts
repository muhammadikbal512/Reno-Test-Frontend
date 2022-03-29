import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandboxEditTableRequestComponent } from './sandbox-edit-table-request.component';

describe('SandboxEditTableRequestComponent', () => {
  let component: SandboxEditTableRequestComponent;
  let fixture: ComponentFixture<SandboxEditTableRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SandboxEditTableRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SandboxEditTableRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
