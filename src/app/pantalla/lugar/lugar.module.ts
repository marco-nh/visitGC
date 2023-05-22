import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LugarPageRoutingModule } from './lugar-routing.module';

import { LugarPage } from './lugar.page';
import {BuscadorPageModule} from "../buscador/buscador.module";
import {IconoGenerosComponent} from "../../icono-generos/icono-generos.component";
import {HeaderComponent} from "../../header/header.component";
import {EstrellaComponent} from "../../estrella/estrella.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LugarPageRoutingModule,
    BuscadorPageModule,
  ],
  exports: [
    HeaderComponent
  ],
    declarations: [LugarPage, HeaderComponent, EstrellaComponent]
})
export class LugarPageModule {}
