import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagedocentePageRoutingModule } from './pagedocente-routing.module';

import { PagedocentePage } from './pagedocente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagedocentePageRoutingModule
  ],
  declarations: [PagedocentePage]
})
export class PagedocentePageModule {}
