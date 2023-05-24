import { Component, OnInit } from '@angular/core';
import firebase from "firebase/compat/app";
import {DataServices} from "../../data.services";
import User = firebase.User;
import {Lugar} from "../../lugar.model";
import {PerfilComponent} from "../../perfil/perfil.component";

@Component({
  selector: 'app-pagina-perfil',
  templateUrl: './pagina-perfil.page.html',
  styleUrls: ['./pagina-perfil.page.scss'],
})
export class PaginaPerfilPage implements OnInit {
  lugaresFiltrados: Lugar[] = [];
  constructor(private dataService:DataServices, private perfil: PerfilComponent) {
    //await this.db.databaseConn();
  }

  ngOnInit() {
    //this.lug.databaseConn();
    console.log("a");

  }
  async ionViewDidEnter() {
    await this.perfil.iniciarComponente();
    //console.log(this.lug.getAllUsers());
    document.getElementById("botonLogin")!.style.display = "none";
  }
}
