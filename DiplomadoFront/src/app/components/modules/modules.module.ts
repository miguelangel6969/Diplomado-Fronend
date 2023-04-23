import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { ConsultaComponent } from './consultas/consulta/consulta.component';
import { GenerarTransaccionComponent } from './transacciones/generar-transaccion/generar-transaccion.component';
import { ConsultaSaldoComponent } from './consultas/consulta-saldo/consulta-saldo.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { ModulosComponent } from './modules.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MaterialModule } from 'src/app/core/modules/material.module';

@NgModule({
  declarations: [
    ModulosComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MaterialModule
  ]
})
export class ModulesModule { }
