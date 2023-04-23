import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-saldo',
  templateUrl: './consulta-saldo.component.html',
  styleUrls: ['./consulta-saldo.component.scss']
})
export class ConsultaSaldoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  saldo = 1000;
}
