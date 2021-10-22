import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagealumnoPage } from './pagealumno.page';

import { ComponenteUnoComponent } from 'src/app/components/componente-uno/componente-uno.component';
import { ComponenteDosComponent } from 'src/app/components/componente-dos/componente-dos.component';

const routes: Routes = [
  {
    path: '',
    component: PagealumnoPage,

    children:[
      {
        path: 'QRLector',
        component:ComponenteUnoComponent
      },
      {
        path: 'Perfil',
        component:ComponenteDosComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagealumnoPageRoutingModule {}
