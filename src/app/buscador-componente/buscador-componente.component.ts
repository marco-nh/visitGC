import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DataServices} from "../data.services";

@Component({
  selector: 'app-buscador-componente',
  templateUrl: './buscador-componente.component.html',
  styleUrls: ['./buscador-componente.component.scss'],
})
export class BuscadorComponenteComponent  implements OnInit {
  palabraBusqueda: string = '';
  constructor(private router: Router, private dataService: DataServices) { }

  ngOnInit() {}
  buscar(){
    this.router.navigate(['/buscador', this.palabraBusqueda]);
  }
}
