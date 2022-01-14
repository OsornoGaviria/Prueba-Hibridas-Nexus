import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranferenciaTPageRoutingModule } from './tranferencia-t-routing.module';

import { TranferenciaTPage } from './tranferencia-t.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranferenciaTPageRoutingModule
  ],
  declarations: [TranferenciaTPage]
})
export class TranferenciaTPageModule {}
