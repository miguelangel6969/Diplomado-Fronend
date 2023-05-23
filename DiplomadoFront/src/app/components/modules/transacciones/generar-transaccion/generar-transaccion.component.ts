import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { usuarios } from 'src/app/core/models/usuario.model';
import { BlockService } from 'src/app/core/service/block.service';
import { UserService } from 'src/app/core/service/user.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-generar-transaccion',
  templateUrl: './generar-transaccion.component.html',
  styleUrls: ['./generar-transaccion.component.scss']
})

export class GenerarTransaccionComponent implements OnInit {
  transactionForm: FormGroup;
  users: usuarios[] = [];


  constructor(private formBuilder: FormBuilder, private svBlock: BlockService, private svUsuarios: UserService) {
    this.transactionForm = this.formBuilder.group({
      amount: ['', [Validators.required]],
      user: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.svUsuarios.list().subscribe(resp => {
      this.users = resp
    })
  }
  get fc() {
    return this.transactionForm.controls
  }
  get fv() {
    return this.transactionForm.value;
  }
  onSubmit() {
    if (this.transactionForm.valid) {
      let data = {
        idBloque: 0,
        destino: this.fv.user.user_key,
        monto: this.fv.amount
      }
      this.svBlock.generarTransaccion(data).subscribe(resp => {
        Swal.fire({
          icon: 'success',
          title: 'Transacción exitosa',
          text: 'La transacción se ha completado con éxito.'
        });
      }, error => {
        Swal.fire({
          icon: 'error',
          title: 'Transacción fallida',
          text: 'La transacción no se ha completado con éxito.'
        });
      })
    }
  }
}

