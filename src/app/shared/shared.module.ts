import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "../header/header.component";
import {IonicModule} from "@ionic/angular";
import {IconoGenerosComponent} from "../icono-generos/icono-generos.component";
import {FormsModule} from "@angular/forms";
import {EstrellaComponent} from "../estrella/estrella.component";



@NgModule({
  declarations: [HeaderComponent, IconoGenerosComponent, EstrellaComponent],
  imports: [
    CommonModule,
    IonicModule,
      FormsModule
  ],
  exports: [HeaderComponent, IconoGenerosComponent, EstrellaComponent]
})
export class SharedModule { }
