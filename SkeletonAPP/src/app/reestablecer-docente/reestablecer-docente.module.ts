import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { IonicModule } from '@ionic/angular';

import { ReestablecerDocentePageRoutingModule } from './reestablecer-docente-routing.module';

import { ReestablecerDocentePage } from './reestablecer-docente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReestablecerDocentePageRoutingModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  declarations: [ReestablecerDocentePage]
})
export class ReestablecerDocentePageModule {}
