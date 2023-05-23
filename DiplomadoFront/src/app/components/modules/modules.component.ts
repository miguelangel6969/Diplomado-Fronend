import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { usuarios } from 'src/app/core/models/usuario.model';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss']
})
export class ModulosComponent implements OnInit {

  constructor(private router: Router, private svUser: UserService) { }

  user = new usuarios()
  ngOnInit(): void {
    this.svUser.user().subscribe(resp => {
      console.log(resp)
      localStorage.setItem('user', resp.cedula);
      this.user = resp
    })
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/login/login'])
  }
}
