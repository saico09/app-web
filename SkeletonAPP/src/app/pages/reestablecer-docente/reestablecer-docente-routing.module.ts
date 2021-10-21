import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReestablecerDocentePage } from './reestablecer-docente.page';

const routes: Routes = [
  {
    path: '',
    component: ReestablecerDocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReestablecerDocentePageRoutingModule {}
