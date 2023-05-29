import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(private svAuth: AuthService, private fb: FormBuilder, private router: Router) { }

  get fc() {
    return this.loginForm.controls
  }
  get fv() {
    return this.loginForm.value;
  }


  //Metodo para iniciar sesion dentro de la aplicacion 
  onSubmit() {
    this.svAuth.login(this.fv.email, this.fv.password).subscribe(resp => {
      this.router.navigate(['/modulos', 'consultas']);
    }, error => {
      Swal.fire({
        icon: 'error',
        title: 'Inicio de sesion fallido',
        text: 'El usuario no se encuentra registrado'
      });
    })
  }
}