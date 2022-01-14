import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TranferenciaTPage } from './tranferencia-t.page';

const routes: Routes = [
  {
    path: '',
    component: TranferenciaTPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TranferenciaTPageRoutingModule {}
