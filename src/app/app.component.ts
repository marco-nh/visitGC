import { Component, OnInit } from '@angular/core';

import firebase from 'firebase/compat/app'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  usuario: string | null = "";
  title = 'visitGC';
  usuarioRegistrado: boolean = false;
  ngOnInit(): void {

  }
}
