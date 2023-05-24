import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-listado-generos',
  templateUrl: './listado-generos.component.html',
  styleUrls: ['./listado-generos.component.scss'],
})
export class ListadoGenerosComponent  implements OnInit {

  @Output() generoSeleccionado = new EventEmitter<string>();

  constructor(){}

  ngOnInit() {}

  onGeneroClick(genero: string){
    this.generoSeleccionado.emit(genero);
  }

}

