import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { ConsultaComponent } from './consulta/consulta.component';
import { GenerarTransaccionComponent } from './generar-transaccion/generar-transaccion.component';
import { ConsultaSaldoComponent } from './consulta-saldo/consulta-saldo.component';


@NgModule({
  declarations: [
    ConsultaComponent,
    GenerarTransaccionComponent,
    ConsultaSaldoComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule
  ]
})
export class ModulesModule { }
