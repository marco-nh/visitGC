import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse, HttpErrorResponse
} from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import { LoadScreenServiceService } from "./load-screen-service.service";


@Injectable()
export class LoadingScreenInterceptorInterceptor implements HttpInterceptor {

  constructor(private loadScreenService : LoadScreenServiceService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("hoal");
    this.loadScreenService.loadingStarted();
    return next.handle(request).pipe(
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
    //return this.handle({next: next, request: request});
  }


}
