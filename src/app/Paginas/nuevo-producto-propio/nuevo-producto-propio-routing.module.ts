import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoProductoPropioPage } from './nuevo-producto-propio.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoProductoPropioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoProductoPropioPageRoutingModule {}
