import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {MatButtonModule} from '@angular/material/button';

import { ReestablecerPageRoutingModule } from './reestablecer-routing.module';

import { ReestablecerPage } from './reestablecer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReestablecerPageRoutingModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  declarations: [ReestablecerPage]
})
export class ReestablecerPageModule {}
