import {Component, Input} from "@angular/core";
import { Router } from "@angular/router";
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


  constructor(private router:Router) {

  }

  

  onSubmit(){
    this.router.navigate(['/lugar'], { queryParams: { lat:this.lat, lng:this.lon } });
  }

 
  
}
