import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleProdTPage } from './detalle-prod-t.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleProdTPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleProdTPageRoutingModule {}
