import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleProdPPage } from './detalle-prod-p.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleProdPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleProdPPageRoutingModule {}
