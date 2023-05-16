import { Component, OnInit } from '@angular/core';
import firebase from "firebase/compat/app";
import {DataServices} from "../../data.services";
import User = firebase.User;

@Component({
  selector: 'app-pagina-perfil',
  templateUrl: './pagina-perfil.page.html',
  styleUrls: ['./pagina-perfil.page.scss'],
})
export class PaginaPerfilPage implements OnInit {
  constructor(private dataService:DataServices) {}

  ngOnInit() {


  }

}
