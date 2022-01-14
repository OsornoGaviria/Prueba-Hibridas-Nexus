import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductosTercerosPageRoutingModule } from './productos-terceros-routing.module';

import { ProductosTercerosPage } from './productos-terceros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductosTercerosPageRoutingModule
  ],
  declarations: [ProductosTercerosPage]
})
export class ProductosTercerosPageModule {}
