import { TestBed, inject } from '@angular/core/testing';

import { CorreiosService } from './correios.service';

describe('CorreiosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CorreiosService]
    });
  });

  it('should ...', inject([CorreiosService], (service: CorreiosService) => {
    expect(service).toBeTruthy();
  }));
});
