import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadGeneratorComponent } from './load-generator.component';

describe('LoadGeneratorComponent', () => {
  let component: LoadGeneratorComponent;
  let fixture: ComponentFixture<LoadGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
