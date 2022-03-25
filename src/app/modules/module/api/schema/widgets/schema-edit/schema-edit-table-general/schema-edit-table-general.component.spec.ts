import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemaEditTableGeneralComponent } from './schema-edit-table-general.component';

describe('SchemaEditTableGeneralComponent', () => {
  let component: SchemaEditTableGeneralComponent;
  let fixture: ComponentFixture<SchemaEditTableGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchemaEditTableGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemaEditTableGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
