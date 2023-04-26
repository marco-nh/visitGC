import { Component, Input } from '@angular/core';
import { Lugar } from '../lugar.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-lugares',
  templateUrl: './listado-lugares.component.html',
  styleUrls: ['./listado-lugares.component.css']
})
export class ListadoLugaresComponent {
  @Input() lugar: Lugar;
  constructor(private router:Router){}

  onSubmit(){
    this.router.navigate(['/lugar'], { queryParams: { lat:this.lugar.latitud, lng:this.lugar.longitud } });
  }
}
