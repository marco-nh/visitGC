import { Component, OnInit } from '@angular/core';
import { Lugar } from '../lugar.model';
import { DataServices } from '../data.services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit{
  lugares: Lugar[] = [];
  lugaresFiltrados: Lugar[] = [];
  palabraBusqueda='';


  constructor(private dataService:DataServices, private route:ActivatedRoute){}

  async ngOnInit(){
    this.lugares = await this.dataService.obtenerLugares();
    this.palabraBusqueda = this.route.snapshot.paramMap.get('termino') || '';
    this.filtrarLugares();
    //this.lugaresFiltrados=this.lugares;
  }

  filtrarLugares(){
    this.lugaresFiltrados=this.lugares.filter( lugar =>
      lugar.nombre.toLowerCase().includes(this.palabraBusqueda.toLowerCase())||
      lugar.informacion1.toLowerCase().includes(this.palabraBusqueda.toLowerCase()))
  }
}
