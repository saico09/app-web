import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Auth2Guard } from 'src/app/guards/auth2.guard';

import { HomeAlumnoPage } from './home-alumno.page';

const routes: Routes = [
  {
    path: '',
    component: HomeAlumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeAlumnoPageRoutingModule {}
