import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { usuario } from 'src/app/core/models/usuarioAuth.model';
import { AuthService } from 'src/app/core/service/auth.service';
import { UserService } from 'src/app/core/service/user.service';
import Swal from 'sweetalert2';

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
    apellido: ['', [Validators.required]],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private svUser: UserService, private router: Router) { }
  ngOnInit(): void {
  }
  get fc() {
    return this.loginForm.controls
  }
  get fv() {
    return this.loginForm.value;
  }
  //metodo para registrar un usuario dentro de la aplicacion 
  onSubmit() {
    let user = new usuario()
    user.nombres = this.fv.nombre
    user.apellidos = this.fv.apellido
    user.cedula = this.fv.numDoc
    user.password = this.fv.password
    user.email = this.fv.email

    this.svUser.registrar(user).subscribe(resp => {
      Swal.fire({
        icon: 'success',
        title: 'Usuario creado con éxito',
        text: 'El usuario se ha creado correctamente.',
        confirmButtonText: 'Aceptar'
      })
      this.router.navigate(['/login/login'])
    })
  }
}
