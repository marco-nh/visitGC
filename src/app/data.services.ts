import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {User} from "./user.model";
import {Router} from "@angular/router";
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import { Lugar } from "./lugar.model";

@Injectable()
export class DataServices{
  private currentUser: firebase.User | null = null;

  constructor(private httpClient: HttpClient, private router: Router, ){
    firebase.initializeApp({
      apiKey: "AIzaSyD29QRnOF1KFWHiNbzGozqOHV-Mu1YG0OY",
      authDomain: "visitgc-e47ab.firebaseapp.com",
    });
  }
  token:string;
  guardarUsuarios(usuarios:User[]){
    this.httpClient.put('https://visitgc-e47ab-default-rtdb.europe-west1.firebasedatabase.app/usuarios.json',usuarios).subscribe(
      response=>console.log("Se ha guardado el usuario: " + response),
      error=>console.log("Error: " + error),

    );

  }

  /*async obtenerLugares(){
    const url='https://visitgc-e47ab-default-rtdb.europe-west1.firebasedatabase.app/lugares.json';
    try{
      const datos = await this.httpClient.get(url).toPromise();
      return datos;
    }catch(error){
      console.log("Error al obtener los datos de Firebase", error);
      return [];
    }
  }*/
  // tu-servicio.ts
  
async obtenerLugares(): Promise<Lugar[]> {
  const url = 'https://visitgc-e47ab-default-rtdb.europe-west1.firebasedatabase.app/lugares.json';
  try {
    const datos = await this.httpClient.get<Lugar[]>(url).toPromise();
    return datos ? Object.values(datos) : [];
  } catch (error) {
    console.log("Error al obtener los datos de Firebase", error);
    return [];
  }
}


  guardarCreedencialesUsuarios(email: string, password:string){
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Usuario creado exitosamente:", user);
        this.router.navigate(['/']);
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
  async actualizarPerfil(displayName: string) {

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log(displayName);
        var profileUpdates = {
          displayName: displayName,
          photoURL: "https://ejemplo.com/imagen.jpg"
        };

        user.updateProfile(profileUpdates)
          .then(function() {
          })
          .catch(function(error) {
          });
      } else {
      }
    });
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

  async buscarDatosLugar(lat: number, lon: number): Promise<Lugar | null> {
    const datos = await this.obtenerLugares();
    if (datos && Object.keys(datos).length > 0) {
      const lugarEncontrado = Object.values(datos).find(
        (lugar: Lugar | null) =>lugar && lugar.latitud == lat && lugar.longitud == lon
      );
      if (lugarEncontrado) {
        
        return lugarEncontrado;
      }
    }
    return null;
  }

}
