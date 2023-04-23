import { Component, OnInit } from '@angular/core';
export interface Persona {
  nombre: string;
  fecha: string;
}
const PERSONAS: Persona[] = [
  { nombre: 'Persona 1', fecha: '01/01/2022' },
  { nombre: 'Persona 2', fecha: '02/01/2022' },
  { nombre: 'Persona 3', fecha: '03/01/2022' },
];
@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})


export class ConsultaComponent implements OnInit {
  columnas: string[] = ['nombre', 'fecha', 'acciones'];
  dataSource = PERSONAS;
  constructor() { }

  ngOnInit(): void {
  }

}
