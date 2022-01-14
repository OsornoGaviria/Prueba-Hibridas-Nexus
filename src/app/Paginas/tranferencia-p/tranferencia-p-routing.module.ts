import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TranferenciaPPage } from './tranferencia-p.page';

const routes: Routes = [
  {
    path: '',
    component: TranferenciaPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TranferenciaPPageRoutingModule {}
