import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoProductoTerceroPageRoutingModule } from './nuevo-producto-tercero-routing.module';

import { NuevoProductoTerceroPage } from './nuevo-producto-tercero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoProductoTerceroPageRoutingModule
  ],
  declarations: [NuevoProductoTerceroPage]
})
export class NuevoProductoTerceroPageModule {}
