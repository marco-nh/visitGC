import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaPerfilPage } from './pagina-perfil.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaPerfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaPerfilPageRoutingModule {}
