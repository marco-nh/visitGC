import { Component, Input } from '@angular/core';
import { Lugar } from '../lugar.model';

@Component({
  selector: 'app-listado-lugares',
  templateUrl: './listado-lugares.component.html',
  styleUrls: ['./listado-lugares.component.css']
})
export class ListadoLugaresComponent {
  @Input() lugar: Lugar;
}
