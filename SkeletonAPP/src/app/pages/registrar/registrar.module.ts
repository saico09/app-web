import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegistrarPageRoutingModule } from './registrar-routing.module';
import { RegistrarPage } from './registrar.page';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarPageRoutingModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  declarations: [RegistrarPage]
})
export class RegistrarPageModule {}
