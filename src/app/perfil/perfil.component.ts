import { Component, OnInit } from '@angular/core';
import firebase from "firebase/compat/app";
import {User} from "../user.model";
import {DataServices} from "../data.services";
import { getAuth, updateEmail, updateProfile } from "firebase/auth";
import {Router} from "@angular/router";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent  implements OnInit {
  nombreUsuario: string = "";
  correoUsuario: string = "";
  constructor(private router: Router, public dataService: DataServices) { }

  async ngOnInit() {
  }
  async iniciarComponente(){
    const _this = this;
    firebase.auth().onAuthStateChanged(async function(user) {
      if (user) {
        // User is signed in.
        const datos = await _this.dataService.obtenerDatosUsuario();
        const usuario = Object.values(datos).find((user1: User) => user1?.email == user.email);
        console.log(usuario);
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
  async cambiarDatos(){
    const auth = getAuth();
    await firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        const datos = await this.dataService.obtenerDatosUsuario();
        const usuario = Object.values(datos).find((user1: User) => user1?.email == user.email);
        const indiceusuario = datos.indexOf(usuario!);
        console.log(this.nombreUsuario);

        datos.splice(indiceusuario,1);
        usuario!.email = this.correoUsuario;
        usuario!.nombre = this.nombreUsuario;
        datos.splice(indiceusuario,0,usuario!);


        updateEmail(auth.currentUser!, this.correoUsuario).then(() => {
          // Email updated!
        }).catch((error) => {
          // An error occurred
        });
        updateProfile(auth.currentUser!, {
          displayName: this.nombreUsuario, photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then(() => {
          // Profile updated!
          // ...
        }).catch((error) => {
          // An error occurred
          // ...
        });
        await this.dataService.guardarUsuarios(datos);

      }
    });
    this.router.navigate(['/home']);

  }
  mostrarCambiarPerfil(){
    document.getElementById("cambioN")!.style.display = "flex";
    document.getElementById("cambioE")!.style.display = "flex";
    document.getElementById("botonguardar")!.style.display = "flex";
  }
  acabarComponente(){
    document.getElementById("cambioN")!.style.display = "none";
    document.getElementById("cambioE")!.style.display = "none";
    document.getElementById("botonguardar")!.style.display = "none";
  }
}
