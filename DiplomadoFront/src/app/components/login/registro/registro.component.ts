import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    nombre: ['', [Validators.required]],
    numDoc: ['', [Validators.required]],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
  }

  onSubmit() {
  }

}
