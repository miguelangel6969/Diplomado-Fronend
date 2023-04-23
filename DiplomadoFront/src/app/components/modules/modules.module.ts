import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { ConsultaComponent } from './consulta/consulta.component';
import { GenerarTransaccionComponent } from './generar-transaccion/generar-transaccion.component';
import { ConsultaSaldoComponent } from './consulta-saldo/consulta-saldo.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    ConsultaComponent,
    GenerarTransaccionComponent,
    ConsultaSaldoComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatIconModule
  ]
})
export class ModulesModule { }
