import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {DataServices} from "../../data.services";
import {HeaderComponent} from "../../header/header.component";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private header: HeaderComponent) { }

  ionViewDidEnter(){
    this.header.inicializar();
  }

}
