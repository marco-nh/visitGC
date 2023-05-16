import { Component, OnInit } from '@angular/core';
import firebase from "firebase/compat/app";
import {User} from "../user.model";
import {DataServices} from "../data.services";


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent  implements OnInit {
  constructor( public dataService: DataServices) { }

  async ngOnInit() {
    const _this = this;
    firebase.auth().onAuthStateChanged(async function(user) {
      if (user) {
        // User is signed in.
        const datos = await _this.dataService.obtenerDatosUsuario();
        const usuario = Object.values(datos).find((user1: User) => user1?.email == user.email);
        document.getElementById("email")!.innerHTML = usuario!.email;
        document.getElementById("nombre")!.innerHTML = usuario!.nombre;
        document.getElementById("idioma")!.innerHTML = usuario!.language;
        /* esto no va aqui*/
        return true;
      } else {
        // No user is signed in.
        return false;
      }
    });
  }

}
