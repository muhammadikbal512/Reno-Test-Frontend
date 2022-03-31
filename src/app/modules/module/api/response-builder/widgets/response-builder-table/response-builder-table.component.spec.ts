import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseBuilderTableComponent } from './response-builder-table.component';

describe('ResponseBuilderTableComponent', () => {
  let component: ResponseBuilderTableComponent;
  let fixture: ComponentFixture<ResponseBuilderTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponseBuilderTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseBuilderTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
