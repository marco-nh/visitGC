import {Component, Input} from "@angular/core";
import { Router } from "@angular/router";
import firebase from "firebase/compat/app";
import {DataServices} from "../data.services";
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

  constructor(private router:Router, private dataService: DataServices) {

  }
  ngOnInit(){
  }
  marcarFavorito(){
    const documento = document.getElementById("titulolugar")!.innerHTML;
    this.dataService.addLugarFavoritoUser(documento);
  }
  onSubmit(){
    this.router.navigate(['/lugar'], { queryParams: { lat:this.lat, lng:this.lon } });
  }


}
