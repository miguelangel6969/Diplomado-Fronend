import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulosComponent } from './modules.component';
import { AuthorizationGuard } from 'src/app/core/guards/authorization.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'consultas',
    pathMatch: 'full'
  },
  {
    path: 'consultas',
    component: ModulosComponent,
    canActivate: [AuthorizationGuard],
    loadChildren: () => import('./consultas/consultas.module').then(m => m.ConsultasModule)
  },
  {
    path: 'transacciones',
    component: ModulosComponent,
    canActivate: [AuthorizationGuard],
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
