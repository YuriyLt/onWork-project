import { TestBed } from '@angular/core/testing';

import { casinoesService } from './casinoes.service';

describe('YService', () => {
  let service: casinoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(casinoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
