import { TestBed } from '@angular/core/testing';

import { RoxanneAngularService } from './roxanne-angular.service';

describe('RoxanneAngularService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoxanneAngularService = TestBed.get(RoxanneAngularService);
    expect(service).toBeTruthy();
  });
});
