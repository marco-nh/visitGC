import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-icono-generos',
  templateUrl: './icono-generos.component.html',
  styleUrls: ['./icono-generos.component.css']
})
export class IconoGenerosComponent {
  @Input() generos:string;
}
