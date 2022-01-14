import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranferenciaPPageRoutingModule } from './tranferencia-p-routing.module';

import { TranferenciaPPage } from './tranferencia-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranferenciaPPageRoutingModule
  ],
  declarations: [TranferenciaPPage]
})
export class TranferenciaPPageModule {}
