import { Component, OnInit } from '@angular/core';

import firebase from 'firebase/compat/app'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'visitGC';
  usuarioRegistrado: boolean = false;
  ngOnInit(): void {
      firebase.initializeApp({
        apiKey: "AIzaSyD29QRnOF1KFWHiNbzGozqOHV-Mu1YG0OY",
        authDomain: "visitgc-e47ab.firebaseapp.com",
      });

  }
}
