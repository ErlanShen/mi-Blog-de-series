
import { AuthService } from './servicios/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private auth: AuthService) {
    this.auth.miUsuario$.subscribe(user=>{
      console.log(user)
    })
  }
}
