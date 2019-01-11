import { TestBed } from '@angular/core/testing';

import { DataRetrieverService } from './data-retriever.service';

describe('DataRetrieverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataRetrieverService = TestBed.get(DataRetrieverService);
    expect(service).toBeTruthy();
  });
});
