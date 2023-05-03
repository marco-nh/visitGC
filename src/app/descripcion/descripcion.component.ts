import {Component, Input} from "@angular/core";
import { Router } from "@angular/router";
import firebase from "firebase/compat/app";
import {DataServices} from "../data.services";
import {User} from "../user.model";
import {Lugar} from "../lugar.model";
@Component({
  selector: "app-descripcion",
  templateUrl: "./descripcion.component.html",
  styleUrls: ["./descripcion.component.css"]
})

export class DescripcionComponent {
  @Input() descripcion:string;
  @Input() fotoLugar:string;
  @Input() tituloLugar:string;
  @Input() lat:number;
  @Input() lon:number;
  lugares: Lugar[] = [];

  fotoEstrella: string = "../assets/imagenes/star.png";

  constructor(private router:Router, private dataService: DataServices) {

  }
  ngOnInit(){
  }
  marcarFavorito(){
    this.dataService.addLugarFavoritoUser(this.tituloLugar);
  }
  onSubmit(){
    this.router.navigate(['/lugar'], { queryParams: { lat:this.lat, lng:this.lon } });
  }

}
