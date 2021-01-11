import { TestBed } from '@angular/core/testing';

import { ImportarService } from './importar.service';

describe('ImportarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImportarService = TestBed.get(ImportarService);
    expect(service).toBeTruthy();
  });
});
