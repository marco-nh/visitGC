import {ChangeDetectorRef, Component, OnInit} from '@angular/core';

import firebase from 'firebase/compat/app'
import {LoadScreenServiceService} from "./load-screen-service.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  usuario: string | null = "";
  title = 'visitGC';
  usuarioRegistrado: boolean = false;

  loading : boolean = false;

  constructor(private loadScreenService : LoadScreenServiceService, private cdRef : ChangeDetectorRef) { }


  ngOnInit(): void {
    this.init();
  }


  init(){
    this.loadScreenService.getLoadingObsarvable().subscribe((status) => {
      console.log("hola");
      this.loading = status === 'start';
      this.cdRef.detectChanges();
    });
  }

}
