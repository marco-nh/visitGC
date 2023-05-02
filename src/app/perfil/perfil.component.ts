import { Component , OnInit} from '@angular/core';
import { Lugar } from '../lugar.model';
import {DataServices} from "../data.services";
import firebase from "firebase/compat/app";
import {Router} from "@angular/router";
import {User} from "../user.model";
import {FormControl, Validators} from "@angular/forms";
import {control} from "leaflet";
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  lugares: Lugar[] = [];
  lugaresFiltrados: Lugar[] = [];
  tamNombre: boolean = true;
  user: User ={
    email: '',
    nombre: '',
    password: '',
    confirmPassword: '',
    language: '',
    lugaresFavoritos: [''],
    imagenPerfil: ''
  }
  constructor(private dataService: DataServices, private router: Router){
  }
  /*todo conseguir la manera de actualizar el perfil, pero me da que hay que documentarse Firebase y
  las promesas*/
  async ngOnInit(){
    firebase.auth().onAuthStateChanged(function(user) {

      if (user) {
          document.getElementById("holaNombre")!.innerHTML = "Hola, " + user.displayName!;

      } else {

      }
    });
    await this.buscarLugaresFavoritos();
    console.log("cargado");
  }

  cambiarPerfil(){
    /* Comprobacion errores form*/
    const controltamNombre = new FormControl(this.user.nombre,Validators.compose([Validators.minLength(2),Validators.maxLength(20)]));

    this.tamNombre = !controltamNombre.hasError('minlength') && !controltamNombre.hasError('maxlength');
    if(controltamNombre.errors != null){
      return;
    }

    var inputValue = (<HTMLInputElement>document.getElementById("floatingNombre")).value;
    console.log(inputValue);
    this.dataService.actualizarPerfil(inputValue);
    window.location.reload();
  }

  cambiarFoto(foto: any){
    console.log(foto);

    //this.user.imagenPerfil = foto;

  }

  async buscarLugaresFavoritos(): Promise<User | null>{
    this.lugares = await this.dataService.obtenerLugares();
    const _this = this;
    firebase.auth().onAuthStateChanged(async function (user) {
      let lugaresAcumulados : Lugar[] = [];
      if (user) {
        const datos = await _this.dataService.obtenerDatosUsuario();
        const usuario = Object.values(datos).find((user1: User | null) => user1?.email == user.email);
        let lugarA: Lugar;
        usuario!.lugaresFavoritos.forEach(function(lug){
          if(lug != ""){
            lugarA = Object.values(_this.lugares).find((lugar) => lugar?.nombre == lug)!;
            console.log(lugaresAcumulados);
            lugaresAcumulados.push(lugarA);
          }
        })
        _this.lugaresFiltrados = lugaresAcumulados;
      } else {

      }
    });
    return null;
  }
}
