import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';
export interface ElementoTabla {
  id: number;
  nombre: string;
  ciudad: string;
  tipoPersona: string;
}
@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})


export class ConsultaComponent implements OnInit {
  columnas: string[] = ['id', 'nombre', 'ciudad', 'tipoPersona', 'acciones'];

  dataSource: ElementoTabla[] = [
    { id: 1, nombre: 'Juan Perez', ciudad: 'Bogotá', tipoPersona: 'Natural' },
    { id: 2, nombre: 'Cristina Rodriguez', ciudad: 'Medellín', tipoPersona: 'Natural' },
    { id: 3, nombre: 'Empresa SAS', ciudad: 'Cali', tipoPersona: 'Jurídica' },
  ];
  constructor() { }

  ngOnInit(): void {


  }

}
