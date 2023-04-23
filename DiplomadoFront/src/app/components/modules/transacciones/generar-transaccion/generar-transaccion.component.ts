import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface User {
  id: number;
  name: string;
}

@Component({
  selector: 'app-generar-transaccion',
  templateUrl: './generar-transaccion.component.html',
  styleUrls: ['./generar-transaccion.component.scss']
})

export class GenerarTransaccionComponent {
  transactionForm: FormGroup;
  users: User[] = [
    { id: 1, name: 'Juan' },
    { id: 2, name: 'Pedro' },
    { id: 3, name: 'María' },
  ];

  constructor(private formBuilder: FormBuilder) {
    this.transactionForm = this.formBuilder.group({
      amount: ['', [Validators.required]],
      user: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.transactionForm.valid) {
      console.log(this.transactionForm.value);
    }
  }
}

