import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UsuarioLogueadoGuard } from './Guards/usuario-logueado.guard';
import { UsuarioNoLogueadoGuard } from './Guards/usuario-no-logueado.guard';

const routes: Routes = [
 

  {
    path: 'login',
    loadChildren: () => import('./Paginas/login/login.module').then( m => m.LoginPageModule),
    canActivate: [UsuarioNoLogueadoGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'dash',
    loadChildren: () => import('./Paginas/dashboard/dashboard.module').then( m => m.DashboardPageModule)
    , canActivate: [UsuarioLogueadoGuard]
  },
  {
    path: 'mis-productos',
    loadChildren: () => import('./Paginas/mis-productos/mis-productos.module').then( m => m.MisProductosPageModule)
    , canActivate: [UsuarioLogueadoGuard]
  },
  {
    path: 'nuevo-producto-propio',
    loadChildren: () => import('./Paginas/nuevo-producto-propio/nuevo-producto-propio.module').then( m => m.NuevoProductoPropioPageModule)
    ,canActivate: [UsuarioLogueadoGuard]
  },
  {
    path: 'productos-terceros',
    loadChildren: () => import('./Paginas/productos-terceros/productos-terceros.module').then( m => m.ProductosTercerosPageModule)
    , canActivate: [UsuarioLogueadoGuard]
  },
  {
    path: 'detalle-prod-p/:id',
    loadChildren: () => import('./Paginas/detalle-prod-p/detalle-prod-p.module').then( m => m.DetalleProdPPageModule)
    , canActivate: [UsuarioLogueadoGuard]
  },
  {
    path: 'detalle-prod-t',
    loadChildren: () => import('./Paginas/detalle-prod-t/detalle-prod-t.module').then( m => m.DetalleProdTPageModule)
    , canActivate: [UsuarioLogueadoGuard]
  },
  {
    path: 'nuevo-producto-tercero',
    loadChildren: () => import('./Paginas/nuevo-producto-tercero/nuevo-producto-tercero.module').then( m => m.NuevoProductoTerceroPageModule)
    , canActivate: [UsuarioLogueadoGuard]
  },
  {
    path: 'tranferencias',
    loadChildren: () => import('./Paginas/tranferencias/tranferencias.module').then( m => m.TranferenciasPageModule)
  },
  {
    path: 'tranferencia-p',
    loadChildren: () => import('./Paginas/tranferencia-p/tranferencia-p.module').then( m => m.TranferenciaPPageModule)
  },
  {
    path: 'tranferencia-t',
    loadChildren: () => import('./Paginas/tranferencia-t/tranferencia-t.module').then( m => m.TranferenciaTPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
