import { TestBed } from '@angular/core/testing';

import { LoadingScreenInterceptorInterceptor } from './loading-screen-interceptor.interceptor';

describe('LoadingScreenInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LoadingScreenInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: LoadingScreenInterceptorInterceptor = TestBed.inject(LoadingScreenInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
