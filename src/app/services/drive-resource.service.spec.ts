import { TestBed } from '@angular/core/testing';

import { DriveResourceService } from './drive-resource.service';

describe('DriveResourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DriveResourceService = TestBed.get(DriveResourceService);
    expect(service).toBeTruthy();
  });
});
