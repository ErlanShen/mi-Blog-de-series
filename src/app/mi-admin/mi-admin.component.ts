import { AuthService } from './../servicios/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-admin',
  templateUrl: './mi-admin.component.html',
  styleUrls: ['./mi-admin.component.scss']
})
export class MiAdminComponent implements OnInit {

  constructor(private out:AuthService) { }

  ngOnInit(): void {
  }
  logout(){
    this.out.cerrarSesion()
  }
}
