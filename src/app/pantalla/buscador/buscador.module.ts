import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscadorPageRoutingModule } from './buscador-routing.module';

import { BuscadorPage } from './buscador.page';

import { IconoGenerosComponent } from 'src/app/icono-generos/icono-generos.component';
import { ListadoLugaresComponent } from 'src/app/listado-lugares/listado-lugares.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        BuscadorPageRoutingModule
    ],
  exports: [
    IconoGenerosComponent
  ],
  declarations: [BuscadorPage, IconoGenerosComponent, ListadoLugaresComponent]
})
export class BuscadorPageModule {}
