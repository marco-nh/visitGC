import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {DataServices} from "../data.services";

@Component({
  selector: 'app-estrella',
  templateUrl: './estrella.component.html',
  styleUrls: ['./estrella.component.css']
})
export class EstrellaComponent {
  @Input() tituloLugar:string;
  @Input() esFav:boolean;

  fotoEstrella: string = "../assets/imagenes/star.png";

  ngOnChanges(){
    if(this.esFav == true){
      this.fotoEstrella = "../assets/imagenes/star_selected.png";
    } else{
      this.fotoEstrella = "../assets/imagenes/star.png";
    }
  }
  constructor(private router:Router, private dataService: DataServices) {
  }
  marcarFavorito(){
    this.dataService.addLugarFavoritoUser(this.tituloLugar);
  }
}
