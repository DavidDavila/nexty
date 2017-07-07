import { TestBed, inject } from '@angular/core/testing';

import { ExtractDataService } from './extract-data.service';

describe('ExtractDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExtractDataService]
    });
  });

  it('should be created', inject([ExtractDataService], (service: ExtractDataService) => {
    expect(service).toBeTruthy();
  }));
});
