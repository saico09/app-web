import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagealumnoPage } from './pagealumno.page';

const routes: Routes = [
  {
    path: '',
    component: PagealumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagealumnoPageRoutingModule {}
