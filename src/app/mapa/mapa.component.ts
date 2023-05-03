import {Component, Input, OnInit} from '@angular/core';
import * as L from 'leaflet';
import { Router } from '@angular/router';
import { DataServices } from '../data.services';
import { Lugar } from '../lugar.model';


class marcadorCustom extends L.Marker{
  genero: string;
}

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  map!: L.Map;
  constructor(private router:Router, private dataService:DataServices){}
  informacion1: string = "";
  foto1: string = "";
  titulo: string = "";
  lat:number;
  lng:number;

  @Input() marcarfavorito: (args: any) => void;

  greenIcon = L.icon({
    iconUrl: '/assets/imagenes/marker-icon-green.png',

  });

  marcadores: L.Marker[]=[];
  async ngOnInit() {
    this.inicializarMapa();


    const lugares=await this.dataService.obtenerLugares();
    //if(lugares){
    //lugares.forEach((lugar: Lugar) => {
      //this.agregarMarcador(lugar.latitud, lugar.longitud, lugar.nombre, lugar.informacion1,lugar.foto1);
    //});
    //}
    if (lugares) {
    Object.values(lugares).forEach((lugar: Lugar) => {
      const marcador = this.agregarMarcador(lugar.latitud, lugar.longitud, lugar.nombre, lugar.informacion1, lugar.foto1, lugar.genero, lugar.latitud, lugar.longitud);
      this.marcadores.push(marcador);
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
    });

    marcador.on('dbclick', () => {
      this.router.navigate(['/lugar'], { queryParams: { lat, lng } });
    });

    marcador.on('click', () => {
      this.router.navigate(['/lugar'], { queryParams: { lat, lng } });
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

  //async obtenerLugares() {
  //  const respuesta = await fetch('../assets/json/lugares.json');
  //  const datos = await respuesta.json();
  //  return datos.lugares;
  //}
}


