import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pantalla/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'registro',
    loadChildren: () => import('./pantalla/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pantalla/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'buscador',
    loadChildren: () => import('./pantalla/buscador/buscador.module').then( m => m.BuscadorPageModule)
  },
  {
    path: 'pagina-perfil',
    loadChildren: () => import('./pantalla/pagina-perfil/pagina-perfil.module').then(m => m.PaginaPerfilPageModule)
  },
  {
    path: 'lugar',
    loadChildren: () => import('./pantalla/lugar/lugar.module').then(m => m.LugarPageModule)
  },
  {
    path: 'lugar/:lat:lng',
    loadChildren: () => import('./pantalla/lugar/lugar.module').then(m => m.LugarPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
