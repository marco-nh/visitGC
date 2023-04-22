import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "./user.model";
import { Router } from "@angular/router";
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import { getAuth, deleteUser, reauthenticateWithCredential } from "firebase/auth";
import { Observable } from 'rxjs';

@Injectable()
export class DataServices{


    constructor(private httpClient: HttpClient, private router: Router, ){}
    token:string;
    guardarUsuarios(usuarios:User[]){
        this.httpClient.put('https://visitgc-e47ab-default-rtdb.europe-west1.firebasedatabase.app/usuarios.json',usuarios).subscribe(
            response=>console.log("Se ha guardado el usuario: " + response),
            error=>console.log("Error: " + error),
        );

    }

    guardarCreedencialesUsuarios(email: string, password:string){
        firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("Usuario creado exitosamente:", user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error al crear el usuario:", errorCode, errorMessage);
        });
    }

    login(email: string, password:string){
        firebase.auth().signInWithEmailAndPassword(email, password).then(
            response=>{
                firebase.auth().currentUser?.getIdToken().then(
                    token=>{
                        this.token=token;
                        this.router.navigate(['/']);
                    }
                )
            }
        );
    }

    getIdToken(){
        return this.token;
    }

    comprobarSesion(){
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          console.log("Usuario logeado")

          /* esto no va aqui*/
          document.getElementById("botonLogueo")!.style.display = "none";
          document.getElementById("botonRegistro")!.style.display = "none";
          document.getElementById("botonPerfil")!.style.display = "inline-block";
          document.getElementById("botonCerrarSesion")!.style.display = "inline-block";
          return true;
        } else {
          // No user is signed in.
          console.log("Usuario no logeado")
          document.getElementById("botonLogueo")!.style.display = "inline-block";
          document.getElementById("botonRegistro")!.style.display = "inline-block";
          document.getElementById("botonPerfil")!.style.display = "none";
          document.getElementById("botonCerrarSesion")!.style.display = "none";
          return false;
        }
      });

    }
    cerrarSesion(){
      firebase.auth().signOut().then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
    }
}
