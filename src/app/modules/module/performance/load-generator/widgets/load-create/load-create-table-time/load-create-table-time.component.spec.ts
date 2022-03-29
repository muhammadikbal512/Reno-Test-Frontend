import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadCreateTableTimeComponent } from './load-create-table-time.component';

describe('LoadCreateTableTimeComponent', () => {
  let component: LoadCreateTableTimeComponent;
  let fixture: ComponentFixture<LoadCreateTableTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadCreateTableTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadCreateTableTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
