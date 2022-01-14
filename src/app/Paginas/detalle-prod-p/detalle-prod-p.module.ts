import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleProdPPageRoutingModule } from './detalle-prod-p-routing.module';

import { DetalleProdPPage } from './detalle-prod-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleProdPPageRoutingModule
  ],
  declarations: [DetalleProdPPage]
})
export class DetalleProdPPageModule {}
