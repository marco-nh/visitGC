import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import {DataServices} from "../data.services";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  palabraBusqueda: string = '';

  constructor(private router: Router, private dataService: DataServices) { }

  async ngOnInit(){
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        document.getElementById("usuarioPerfil")!.style.display="inline-block";
        document.getElementById("botonCerrarSesion")!.style.display="inline-block";
        document.getElementById("botonLogin")!.style.display="none";
        document.getElementById("botonRegistro")!.style.display="none";
        return true;
      } else {
        document.getElementById("usuarioPerfil")!.style.display="none";
        document.getElementById("botonCerrarSesion")!.style.display="none";
        document.getElementById("botonLogin")!.style.display="inline-block";
        document.getElementById("botonRegistro")!.style.display="inline-block";
        return null;
      }
    });
  }

  navegarLogin(){
    this.router.navigate(['/login']);
  }
  navegarRegistro(){
    this.router.navigate(['/registro']);
  }
  navegarPerfil(){
    this.router.navigate(['/pagina-perfil']);
  }

  cerrarSesion(){
    this.dataService.cerrarSesion();
  }

  buscar(){
    this.router.navigate(['/buscador', this.palabraBusqueda]);
  }

}
