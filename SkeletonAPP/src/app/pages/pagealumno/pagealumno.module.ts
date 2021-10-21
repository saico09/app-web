import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagealumnoPageRoutingModule } from './pagealumno-routing.module';

import { PagealumnoPage } from './pagealumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagealumnoPageRoutingModule
  ],
  declarations: [PagealumnoPage]
})
export class PagealumnoPageModule {}
