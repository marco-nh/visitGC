import { Component,OnInit ,Input} from '@angular/core';
import { DataServices } from '../data.services';
import {user} from "@angular/fire/auth";
import firebase from "firebase/compat/app";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  @Input() usuarioPerfil: string | null;
  constructor(private dataService: DataServices){}
  ngOnInit(){
    const sesionIniciada = this.dataService.comprobarSesion();
    console.log(sesionIniciada);
    console.log(this.usuarioPerfil);
    const user = firebase.auth().currentUser;
    if (user !== null) {
      // The user object has basic properties such as display name, email, etc.
      const displayName = user.displayName;
      const email = user.email;
      const photoURL = user.photoURL;
      const emailVerified = user.emailVerified;

      // The user's ID, unique to the Firebase project. Do NOT use
      // this value to authenticate with your backend server, if
      // you have one. Use User.getIdToken() instead.
      const uid = user.uid;
    }
  }
  cerrarSesion(){
    this.dataService.cerrarSesion();
  }
}
