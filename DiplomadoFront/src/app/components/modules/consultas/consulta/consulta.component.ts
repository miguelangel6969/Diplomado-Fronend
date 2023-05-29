import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';
import { BlockService } from 'src/app/core/service/block.service';
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
  columnas: string[] = ['fecha', 'monto', 'usuario'];

  dataSource: ElementoTabla[] = [];
  constructor(private svBlock: BlockService) { }
  //Asigna los estilos correspondientes al valor 
  getStyle(value: boolean): object {
    return {
      color: value ? 'green' : 'red'
    };
  }
  //Asigna el signo correspondientes al valor 
  getSigno(valor: String, signo: boolean) {
    let valorSigno = ""
    signo ? valorSigno = "+ " + valor : valorSigno = "- " + valor
    return valorSigno
  }
  //Consulta el historial del usuario logeado
  ngOnInit(): void {
    this.svBlock.historial().subscribe(resp => {
      this.dataSource = resp
    })
  }

}
