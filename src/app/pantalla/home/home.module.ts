import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {MapaComponent} from "../../mapa/mapa.component";
import {ListadoGenerosComponent} from "../../listado-generos/listado-generos.component";
import {DescripcionComponent} from "../../descripcion/descripcion.component";
import {SharedModule} from "../../shared/shared.module";



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
        SharedModule
    ],
  declarations: [HomePage, MapaComponent, ListadoGenerosComponent, DescripcionComponent]
})
export class HomePageModule {}
