import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadCreateTableGeneralComponent } from './load-create-table-general.component';

describe('LoadCreateTableGeneralComponent', () => {
  let component: LoadCreateTableGeneralComponent;
  let fixture: ComponentFixture<LoadCreateTableGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadCreateTableGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadCreateTableGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
