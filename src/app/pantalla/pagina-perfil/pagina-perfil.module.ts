import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaPerfilPageRoutingModule } from './pagina-perfil-routing.module';

import { PaginaPerfilPage } from './pagina-perfil.page';
import {PerfilComponent} from "../../perfil/perfil.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaPerfilPageRoutingModule
  ],
  declarations: [PaginaPerfilPage, PerfilComponent]
})
export class PaginaPerfilPageModule {}
