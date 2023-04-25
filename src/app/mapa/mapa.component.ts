import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Router } from '@angular/router';


interface Lugar{
  id: number,
  nombre: string,
  genero: string,
  informacion1: string,
  informacion2: string,
  latitud: number,
  longitud: number,
  foto1: string,
  foto2: string,
  foto3: string
}



@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  map!: L.Map;
  constructor(private router:Router){}
  informacion1: string = "";
  foto1: string = "";
  titulo: string = "";

  async ngOnInit() {
   this.inicializarMapa();
   //const lugaresFirebase=await this.dataServices.obtenerLugaresFirebase();
   //console.log("lugaresFirebase-->" + lugaresFirebase);
   const lugares=await this.obtenerLugares();
   console.log(lugares);
   if(lugares){
    lugares.forEach((lugar: Lugar) => {
      this.agregarMarcador(lugar.latitud, lugar.longitud, lugar.nombre, lugar.informacion1,lugar.foto1);
    });
   }
   //this.agregarMarcador();//Aqui faltan los parametros
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

  agregarMarcador(lat: number, lng: number, nombre: string, descripcion: string, foto: string) {
    const marcador = L.marker([lat, lng]).addTo(this.map);
    //marcador.nombreLugar = nombre;
    //marcador.descripcionLugar = descripcion;
    let descripcionMapa = document.getElementById("ventanaDescripcion")!;

    //const divInfoLugar = document.getElementById('titulo_h2');
    //const divInfoDescripcion = document.getElementById('descripcionLugar');



    marcador.on('mouseover', () => {
      marcador.bindPopup(`<strong>${nombre}</strong><br>${descripcion}`).openPopup();

      //pasar descripcion al descripcion.component
      descripcionMapa.style.display = 'block';
      this.informacion1 = `${descripcion}`;
      this.foto1 = `${foto}`;
      this.titulo = `${nombre}`;
    });

    marcador.on('dbclick', () => {
      this.router.navigate(['/lugar'], { queryParams: { lat, lng } });
    });

    marcador.on('click', () => {
      this.router.navigate(['/lugar'], { queryParams: { lat, lng } });
    });
  }

  async obtenerLugares() {
    const respuesta = await fetch('../assets/json/lugares.json');
    const datos = await respuesta.json();
    return datos.lugares;
  }
}


