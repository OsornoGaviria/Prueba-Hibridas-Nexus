import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoProductoTerceroPage } from './nuevo-producto-tercero.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoProductoTerceroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoProductoTerceroPageRoutingModule {}
