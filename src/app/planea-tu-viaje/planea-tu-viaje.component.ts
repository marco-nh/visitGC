import { Component } from '@angular/core';
import {Lugar} from "../lugar.model";

@Component({
  selector: 'app-planea-tu-viaje',
  templateUrl: './planea-tu-viaje.component.html',
  styleUrls: ['./planea-tu-viaje.component.css']
})
export class PlaneaTuViajeComponent {

  municipios: string[] = [
    "Agaete" ,
    "Agüimes" ,
    "Artenara" ,
    "Arucas" ,
    "Firgas" ,
    "Gáldar" ,
    "Ingenio" ,
    "La Aldea de San Nicolás" ,
    "Las Palmas de Gran Canaria" ,
    "Mogán" ,
    "Moya" ,
    "San Bartolomé de Tirajana" ,
    "Santa Brígida" ,
    "Santa Lucía de Tirajana" ,
    "Santa María de Guía de Gran Canaria" ,
    "Tejeda" ,
    "Telde" ,
    "Teror" ,
    "Valleseco" ,
    "Valsequillo de Gran Canaria" ,
    "Vega de San Mateo"
  ];




}
