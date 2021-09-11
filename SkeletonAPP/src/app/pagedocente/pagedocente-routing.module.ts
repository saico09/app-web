import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagedocentePage } from './pagedocente.page';

const routes: Routes = [
  {
    path: '',
    component: PagedocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagedocentePageRoutingModule {}
