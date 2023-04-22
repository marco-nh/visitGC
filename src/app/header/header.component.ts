import { Component,OnInit } from '@angular/core';
import { DataServices } from '../data.services';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  constructor(private dataService: DataServices){}
  ngOnInit(){
    const sesionIniciada = this.dataService.comprobarSesion();
    console.log(sesionIniciada);

  }
  cerrarSesion(){
    this.dataService.cerrarSesion();
  }
}
