import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ConsultasRoutingModule } from './consultas-routing.module';
import { ConsultaSaldoComponent } from './consulta-saldo/consulta-saldo.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { MaterialModule } from 'src/app/core/modules/material.module';

@NgModule({
    declarations: [
        ConsultaComponent,
        ConsultaSaldoComponent,
    ],
    imports: [
        CommonModule,
        ConsultasRoutingModule,
        MatInputModule,
        MatFormFieldModule,
        MatTableModule,
        MatIconModule,
        MatToolbarModule,
        MaterialModule
    ]
})
export class ConsultasModule { }
