import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {DataServices} from "../data.services";
import firebase from "firebase/compat/app";
import "firebase/compat/auth"

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private route: Router, private dataService: DataServices) {}
  navegarLogin(){
    this.route.navigate(['/login']);
  }
  navegarRegistro(){
    this.route.navigate(['/registro']);
  }
  navegarPerfil(){
    this.route.navigate(['/pagina-perfil']);
  }
  async ngOnInit(){
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        document.getElementById("usuarioPerfil")!.style.display="inline-block";
        return true;
      } else {

        return null;
      }
    });
  }
}
