import { TestBed } from '@angular/core/testing';

import { UiKitService } from './ui-kit.service';

describe('UiKitService', () => {
  let service: UiKitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiKitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
