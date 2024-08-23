import { TestBed } from '@angular/core/testing';

import { FancyFormService } from './pages/register-user-page/components/fancy-form/fancy-form.service';

describe('FancyFormService', () => {
  let service: FancyFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FancyFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
