import {Component, Input, OnInit} from '@angular/core';
import {User} from "../user.model";
import {DataServices} from "../data.services";
import {NavigationExtras, Router} from "@angular/router";
import {Lugar} from "../lugar.model";
import firebase from "firebase/compat/app";
import * as L from 'leaflet';
import {getElement} from "ionicons/dist/types/stencil-public-runtime";


class marcadorCustom extends L.Marker{
  genero: string = '';

}

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent  implements OnInit {

  map!: L.Map;

  constructor(private router:Router, private dataService:DataServices){}
  informacion1: string = "";
  foto1: string = "";
  titulo: string = "";
  lat:number = 0;
  lng:number = 0;

  genero:string = "";

  esFav:boolean = false;
  usuario: User | undefined;

  @Input() marcarfavorito: (args: any) => void = args => null;

  greenIcon = L.icon({
    iconUrl: '/assets/imagenes/marker-icon-green.png',

  });

  marcadores: L.Marker[]=[];
  async ngOnInit() {
    this.inicializarMapa();

    const lugares=await this.dataService.obtenerLugares();

    if (lugares) {
      Object.values(lugares).forEach((lugar: Lugar) => {
        const marcador = this.agregarMarcador(lugar.latitud, lugar.longitud, lugar.nombre, lugar.informacion1, lugar.foto1, lugar.genero, lugar.latitud, lugar.longitud);
        this.marcadores.push(marcador);
      });

      const _this = this;
      await firebase.auth().onAuthStateChanged(async user => {
        if (user) {
          const datos = await this.dataService.obtenerDatosUsuario();
          _this.usuario = Object.values(datos).find((user1: User) => user1?.email == user.email);
        }
      });
    }

  }

  inicializarMapa(){
    //Inicializar el mapa
    this.map = L.map('mapa').setView([28.09973, -15.41343], 10);

    //Agregar el mapa
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
      maxZoom: 18
    }).addTo(this.map);

    this.map.whenReady(() => {
        setTimeout(() => {
          this.map.invalidateSize();
        }, 1000);
      }
    );

  }



  agregarMarcador(lat: number, lng: number, nombre: string, descripcion: string, foto: string, genero:string, latitud:number, longitud:number) {
    const marcador = new marcadorCustom([lat, lng]).addTo(this.map);
    marcador.genero = genero;
    //marcador.descripcionLugar = descripcion;
    let descripcionMapa = document.getElementById("ventanaDescripcion")!;

    marcador.on('mouseover', () => {
      marcador.bindPopup(`<strong>${nombre}</strong><br>${descripcion}`).openPopup();

      //Añadimos el marcador al array de marcadores

      //pasar descripcion al descripcion.component
      descripcionMapa.style.display = 'block';
      this.informacion1 = `${descripcion}`;
      this.foto1 = `${foto}`;
      this.titulo = `${nombre}`;
      this.lat=latitud;
      this.lng=longitud;
      this.genero=genero;

      if(this.usuario!.lugaresFavoritos.find((lug: string) => this.titulo == lug) == undefined) {
        this.esFav = false;
      } else {
        this.esFav = true;
      }
    });

    marcador.on('dbclick', () => {
      //window.history.replaceState({}, '', url + queryParams);
      this.router.navigate(['/lugar'], { queryParams : {lat, lng} });
    });

    marcador.on('click', () => {
      //.history.replaceState({}, '', url + queryParams);
      this.router.navigate(['/lugar'], { queryParams : {lat, lng} });
    });

    return marcador;
  }

  onGeneroClick(genero:string) {
    this.map.eachLayer((layer) =>{
      if(layer instanceof marcadorCustom){
        const marcador = layer as marcadorCustom;
        if(marcador.genero === genero){
          layer.setIcon(this.greenIcon);
        }else{
          layer.setIcon(new L.Icon.Default());
        }
      }
    })
  }


}
