import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaPerfilPageRoutingModule } from './pagina-perfil-routing.module';

import { PaginaPerfilPage } from './pagina-perfil.page';
import {PerfilComponent} from "../../perfil/perfil.component";
import {ListadoLugaresComponent} from "../../listado-lugares/listado-lugares.component";
import {BuscadorPageModule} from "../buscador/buscador.module";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PaginaPerfilPageRoutingModule,
        BuscadorPageModule,
        SharedModule
    ],
  providers: [
    PerfilComponent
  ],
  declarations: [PaginaPerfilPage, PerfilComponent]
})
export class PaginaPerfilPageModule {}
