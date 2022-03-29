import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiteEditEmailComponent } from './suite-edit-email.component';

describe('SuiteEditEmailComponent', () => {
  let component: SuiteEditEmailComponent;
  let fixture: ComponentFixture<SuiteEditEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuiteEditEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiteEditEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
