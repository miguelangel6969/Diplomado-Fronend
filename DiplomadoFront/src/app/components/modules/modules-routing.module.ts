import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulosComponent } from './modules.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'consultas',
    pathMatch: 'full'
  },
  {
    path: 'consultas',
    component: ModulosComponent,
    loadChildren: () => import('./consultas/consultas.module').then(m => m.ConsultasModule)
  },
  {
    path: 'transacciones',
    component: ModulosComponent,
    loadChildren: () => import('./transacciones/transacciones.module').then(m => m.TransaccionesModule)
  },
  {
    path: '**',
    redirectTo: 'consultas'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
