import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import index from "@angular/cli/lib/cli";

@Injectable({
  providedIn: 'root'
})
export class LoadScreenServiceService {

  private contador : number = 0;
  private loading$ = new BehaviorSubject<string>('');

  constructor() { }

  getLoadingObsarvable(): Observable<string> {
    return this.loading$.asObservable();
  }

  loadingStarted(){
    if(++this.contador == 1){
      this.loading$.next('start');
    }
  }

  loadingEnded(){
    if(this.contador == 0 || --this.contador == 0){
      this.loading$.next('stop');
    }
  }

  resetLoading(){
    this.contador = 0;
    this.loading$.next('stop');
  }


}
