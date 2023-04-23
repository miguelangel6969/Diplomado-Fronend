import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaSaldoComponent } from './consulta-saldo/consulta-saldo.component';
import { ConsultaComponent } from './consulta/consulta.component';
const routes: Routes = [
    {
        path: '',
        component: ConsultaComponent
    },
    {
        path: 'consultar',
        component: ConsultaComponent
    },
    {
        path: 'consultarSaldo',
        component: ConsultaSaldoComponent
    },
    {
        path: '**',
        redirectTo: 'consultar',
        component: ConsultaComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConsultasRoutingModule { }