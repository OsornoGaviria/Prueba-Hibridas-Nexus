import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleProdTPageRoutingModule } from './detalle-prod-t-routing.module';

import { DetalleProdTPage } from './detalle-prod-t.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleProdTPageRoutingModule
  ],
  declarations: [DetalleProdTPage]
})
export class DetalleProdTPageModule {}
