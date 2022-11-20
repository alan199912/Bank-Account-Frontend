import { TestBed } from '@angular/core/testing';

import { SpinnerService } from './spinner.service';

describe('SpinnerService', () => {
  let service: SpinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpinnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#show should return true', () => {
    service.show();
    expect(service.spinner$.subscribe((value) => expect(value).toBe(true)));
  });

  it('#hide should return false', () => {
    service.hide();
    expect(service.spinner$.subscribe((value) => expect(value).toBe(false)));
  });

  it('#spinner$ should return true', () => {
    expect(service.spinner$.subscribe((value) => expect(value).toBe(false)));
  });
});
