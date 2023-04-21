import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) }, { path: 'modules', loadChildren: () => import('./components/modules/modules.module').then(m => m.ModulesModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
