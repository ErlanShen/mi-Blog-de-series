import { Router } from '@angular/router';
import { AuthService } from './../servicios/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  registro={
    email:"",
    contrasenia:""
  }
  constructor(private auth:AuthService,private ruta:Router) { }

  ngOnInit(): void {
  }

  nuevoUser(nuevo:any){
    this.auth.registrarCorreo(nuevo.email,nuevo.contrasenia)
    this.ruta.navigateByUrl("/login")
  }

}
