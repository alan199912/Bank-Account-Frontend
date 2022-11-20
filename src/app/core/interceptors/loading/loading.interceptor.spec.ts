import { HttpRequest } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { LoadingInterceptor } from './loading.interceptor';

describe('LoadingInterceptor', () => {
  const next: any = {
    handle: () => {
      return new Observable((subscriber: any) => {
        subscriber.complete();
      });
    }
  };

  const requestMock = new HttpRequest('GET', '/api/v1/bank/getAccounts');

  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [LoadingInterceptor]
    })
  );

  it('should be created', () => {
    const interceptor: LoadingInterceptor = TestBed.inject(LoadingInterceptor);
    expect(interceptor).toBeTruthy();
  });

  it('#intercept should return a Observable', () => {
    const interceptor: LoadingInterceptor = TestBed.inject(LoadingInterceptor);
    interceptor.intercept(requestMock, next).subscribe(() => {
      expect(interceptor.intercept).toBeGreaterThan(0);
    });
  });
});
