import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemaCreateTableGeneralComponent } from './schema-create-table-general.component';

describe('SchemaCreateTableGeneralComponent', () => {
  let component: SchemaCreateTableGeneralComponent;
  let fixture: ComponentFixture<SchemaCreateTableGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchemaCreateTableGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemaCreateTableGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
