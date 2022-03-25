import { TestBed } from '@angular/core/testing';

import { BtnBackService } from './btn-back.service';

describe('BtnBackService', () => {
  let service: BtnBackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BtnBackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
