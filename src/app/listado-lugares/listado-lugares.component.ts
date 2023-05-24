import { Component, Input, OnInit } from '@angular/core';
import { Lugar } from '../lugar.model';
import { Router } from '@angular/router';
import {DataServices} from "../data.services";
@Component({
  selector: 'app-listado-lugares',
  templateUrl: './listado-lugares.component.html',
  styleUrls: ['./listado-lugares.component.scss'],

})
export class ListadoLugaresComponent  implements OnInit {

 

  @Input() lugar!: Lugar;
  constructor(private router:Router, private dataService: DataServices){}

  ngOnInit() {

  }

  onSubmit(){
    this.router.navigate(['/lugar'], { queryParams: { lat:this.lugar.latitud, lng:this.lugar.longitud } });
  }

}
