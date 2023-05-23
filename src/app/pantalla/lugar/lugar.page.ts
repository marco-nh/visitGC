import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from "@angular/router";
import * as L from 'leaflet';
import { Lugar } from '../../lugar.model';
import { DataServices } from '../../data.services';
import firebase from "firebase/compat/app";
import {User} from "../../user.model";

@Component({
  selector: 'app-lugar',
  templateUrl: './lugar.page.html',
  styleUrls: ['./lugar.page.scss'],
})

export class LugarPage implements OnInit{

  map!: L.Map;
  lat: number = 0;
  lon: number = 0;
  datos: Lugar | undefined;

  esFav: boolean = false;

  constructor(private activateRoute:ActivatedRoute, private dataServices:DataServices){}

  async ngOnInit(){
    this.activateRoute.queryParams
      .subscribe(params => {
          this.lat = params['lat'];
          this.lon = params['lng'];
        }
      );

    this.inicializarMapa(this.lat,this.lon);
    this.datos = await this.dataServices.buscarDatosLugar(this.lat, this.lon)
      || undefined;

    await firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        const datos = await this.dataServices.obtenerDatosUsuario();
        const usuario = Object.values(datos).find((user1: User) => user1?.email == user.email);
        if(usuario!.lugaresFavoritos.find((lug: string) => this.datos?.nombre == lug) == undefined) {
          this.esFav = false;
        } else {
          this.esFav = true;
        }
      }
    });
  }

  /*async ionViewWillEnter(){
    this.inicializarMapa(this.lat,this.lon);
    this.datos = await this.dataServices.buscarDatosLugar(this.lat, this.lon)
      || undefined;

    await firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        const datos = await this.dataServices.obtenerDatosUsuario();
        const usuario = Object.values(datos).find((user1: User) => user1?.email == user.email);
        if(usuario!.lugaresFavoritos.find((lug: string) => this.datos?.nombre == lug) == undefined) {
          this.esFav = false;
        } else {
          this.esFav = true;
        }
      }
    });
  }*/

  inicializarMapa(lat:number,lon: number){
    this.map = L.map('mapa2').setView([lat, lon], 10);

    //Agregar el mapa
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
      maxZoom: 18
    }).addTo(this.map);
    //const marcador = L.marker([lat, lon]).addTo(this.map);
    //this.map.fitBounds(marcador.getBounds());
    var  myFGMarker = new L.FeatureGroup();
    const marker = L.marker([lat, lon]);
    myFGMarker.addLayer(marker);
    myFGMarker.addTo(this.map);
    this.map.fitBounds(myFGMarker.getBounds());

    this.map.whenReady(() => {
          setTimeout(() => {
            this.map.invalidateSize();
          }, 1000);
        }
    );
  }



}

