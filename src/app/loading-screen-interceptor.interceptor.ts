import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse, HttpErrorResponse
} from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import { LoadScreenServiceService } from "../app/load-screen/load-screen-service.service";


@Injectable()
export class LoadingScreenInterceptorInterceptor implements HttpInterceptor {

  constructor(private loadScreenService : LoadScreenServiceService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loadScreenService.loadingStarted();
    // return next.handle(request);
    return this.handle({next: next, request: request});
  }

  handle({next, request}: { next: any, request: any }){
    return next.handle(request)
      .pipe(
        tap(
          (event) => {
            if(event instanceof HttpResponse){
              this.loadScreenService.loadingEnded();
            }
          },
          (error: HttpErrorResponse) => {
            this.loadScreenService.resetLoading();
            throw error;

          }
        ),
      );
  }



}
