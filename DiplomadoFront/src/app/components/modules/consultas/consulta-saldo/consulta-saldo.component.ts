import { Component, OnInit } from '@angular/core';
import { BlockService } from 'src/app/core/service/block.service';

@Component({
  selector: 'app-consulta-saldo',
  templateUrl: './consulta-saldo.component.html',
  styleUrls: ['./consulta-saldo.component.scss']
})
export class ConsultaSaldoComponent implements OnInit {

  constructor(private svBlock: BlockService) { }

  saldo = 0;
  //Consulta el saldo del usuario logeado
  ngOnInit(): void {
    this.svBlock.saldo().subscribe(resp => {
      this.saldo = resp.saldo
    })
  }
}
