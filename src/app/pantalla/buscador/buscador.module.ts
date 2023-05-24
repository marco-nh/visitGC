import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscadorPageRoutingModule } from './buscador-routing.module';

import { BuscadorPage } from './buscador.page';

import { ListadoLugaresComponent } from 'src/app/listado-lugares/listado-lugares.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        BuscadorPageRoutingModule,
        SharedModule
    ],
    exports: [
        ListadoLugaresComponent,
    ],
  declarations: [BuscadorPage, ListadoLugaresComponent]
})
export class BuscadorPageModule {}
