import {Component, EventEmitter, Output} from "@angular/core";

@Component({
  selector: "app-generos",
  templateUrl: "./generos.component.html",
  styleUrls: ["./generos.component.css"]
})

export class GenerosComponent {

  @Output() generoSeleccionado = new EventEmitter<string>();

  constructor(){}

  onGeneroClick(genero: string){
    this.generoSeleccionado.emit(genero);
  }

}
