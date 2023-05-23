import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LugarPageRoutingModule } from './lugar-routing.module';

import { LugarPage } from './lugar.page';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LugarPageRoutingModule,
    SharedModule
  ],
  exports: [

  ],
    declarations: [LugarPage]
})
export class LugarPageModule {}
