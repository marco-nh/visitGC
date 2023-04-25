import {Component, OnInit} from '@angular/core';
import { ActivatedRoute} from "@angular/router";
import * as L from 'leaflet';


@Component({
  selector: 'app-lugar',
  templateUrl: './lugar.component.html',
  styleUrls: ['./lugar.component.css']
})
export class LugarComponent implements OnInit{

  constructor(private activateRoute:ActivatedRoute){}
  map!: L.Map;
  lat: number;
  lon: number;
  ngOnInit(){
    this.activateRoute.queryParams
      .subscribe(params => {
          console.log(params);
          this.lat = params['lat'];
          this.lon = params['lng'];
        }
      );
    this.inicializarMapa(this.lat,this.lon);


  }

  inicializarMapa(lat:number,lon: number){
    this.map = L.map('mapa').setView([lat, lon], 10);

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
  }
}
