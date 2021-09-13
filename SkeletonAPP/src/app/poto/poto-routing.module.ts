import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PotoPage } from './poto.page';

const routes: Routes = [
  {
    path: '',
    component: PotoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PotoPageRoutingModule {}
