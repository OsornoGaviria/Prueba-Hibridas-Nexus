import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoProductoPropioPageRoutingModule } from './nuevo-producto-propio-routing.module';

import { NuevoProductoPropioPage } from './nuevo-producto-propio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoProductoPropioPageRoutingModule
  ],
  declarations: [NuevoProductoPropioPage]
})
export class NuevoProductoPropioPageModule {}
