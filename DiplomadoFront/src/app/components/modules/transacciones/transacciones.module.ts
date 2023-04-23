import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MaterialModule } from 'src/app/core/modules/material.module';
import { TransaccionesRoutingModule } from './transacciones-routing.module';
import { GenerarTransaccionComponent } from './generar-transaccion/generar-transaccion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Agregar esta línea

@NgModule({
    declarations: [
        GenerarTransaccionComponent
    ],
    imports: [
        CommonModule,
        TransaccionesRoutingModule,
        MatInputModule,
        MatFormFieldModule,
        MatTableModule,
        MatIconModule,
        MatToolbarModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class TransaccionesModule { }
