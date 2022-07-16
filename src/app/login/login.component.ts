import { Router } from '@angular/router';
import { AuthService } from './../servicios/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  Datos = {
    email: "",
    contrasenia: ""
  }
  constructor(private auth: AuthService, private ruta: Router) { }

  ngOnInit(): void {
  }
  recibir(dt: any) {
    this.auth.sessionCorreo(dt.email, dt.contrasenia)
    this.ruta.navigateByUrl("/inicio")
  }


}
