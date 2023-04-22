import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import {DescripcionComponent} from "./descripcion/descripcion.component";
import {GenerosComponent} from "./generos/generos.component";
import {NgOptimizedImage} from "@angular/common";
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from "@angular/router";
import { PlaneaTuViajeComponent } from './planea-tu-viaje/planea-tu-viaje.component';
import { BuscadorComponent } from './buscador/buscador.component';
import {HeaderComponent} from "./header/header.component";
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { ErrorPersonalizadoComponent } from './error-personalizado/error-personalizado.component';
import { MapaComponent } from './mapa/mapa.component';
import { LugarComponent } from './lugar/lugar.component';
import {ListadoLugaresComponent} from "./listado-lugares/listado-lugares.component";
import { DataServices } from './data.services';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


const appRoute:Routes=[
  {path:'', component:HomeComponent},
  {path:'planea_tu_viaje', component:PlaneaTuViajeComponent},
  {path:'buscador', component:BuscadorComponent},
  {path:'sign_up', component:SignUpComponent},
  {path:'log_in', component:LogInComponent},
  {path:'lugar', component:LugarComponent},
  {path:'**', component:ErrorPersonalizadoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DescripcionComponent,
    GenerosComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    PlaneaTuViajeComponent,
    BuscadorComponent,
    SignUpComponent,
    LogInComponent,
    ErrorPersonalizadoComponent,
    MapaComponent,
    LugarComponent,
    ListadoLugaresComponent,

  ],
  imports: [
    BrowserModule,
    NgOptimizedImage,
    RouterModule.forRoot(appRoute),
    HttpClientModule,
    FormsModule,
  ],
  providers: [DataServices],
  bootstrap: [AppComponent]
})

export class AppModule { }
