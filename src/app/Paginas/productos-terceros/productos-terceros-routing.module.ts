import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductosTercerosPage } from './productos-terceros.page';

const routes: Routes = [
  {
    path: '',
    component: ProductosTercerosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductosTercerosPageRoutingModule {}
