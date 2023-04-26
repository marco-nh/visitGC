import { Component , OnInit} from '@angular/core';
import {DataServices} from "../data.services";
import firebase from "firebase/compat/app";
import {Router} from "@angular/router";
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  fotoPerfil: string;

  constructor(private dataService: DataServices, private router: Router){
  }
  /*todo conseguir la manera de actualizar el perfil, pero me da que hay que documentarse Firebase y
  las promesas*/
  ngOnInit(){
    firebase.auth().onAuthStateChanged(function(user) {

      if (user) {
          document.getElementById("name")!.setAttribute("value",user.displayName!);
          document.getElementById("holaNombre")!.innerHTML = "Hola, " + user.displayName!;
      } else {

      }
    });
  }

  cambiarPerfil(){

    var inputValue = (<HTMLInputElement>document.getElementById("name")).value;
    console.log(inputValue);
    this.dataService.actualizarPerfil(inputValue);
    this.router.navigate(['/']);
  }

  cambiarFoto(){

  }

}
