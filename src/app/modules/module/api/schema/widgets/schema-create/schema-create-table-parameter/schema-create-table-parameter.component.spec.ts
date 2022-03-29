import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemaCreateTableParameterComponent } from './schema-create-table-parameter.component';

describe('SchemaCreateTableParameterComponent', () => {
  let component: SchemaCreateTableParameterComponent;
  let fixture: ComponentFixture<SchemaCreateTableParameterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchemaCreateTableParameterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemaCreateTableParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
