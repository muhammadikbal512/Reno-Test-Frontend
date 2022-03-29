import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiteCreateEmailComponent } from './suite-create-email.component';

describe('SuiteCreateEmailComponent', () => {
  let component: SuiteCreateEmailComponent;
  let fixture: ComponentFixture<SuiteCreateEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuiteCreateEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiteCreateEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
