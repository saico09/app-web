import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PotoPageRoutingModule } from './poto-routing.module';

import { PotoPage } from './poto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PotoPageRoutingModule
  ],
  declarations: [PotoPage]
})
export class PotoPageModule {}
