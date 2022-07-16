import { map, take, tap } from 'rxjs/operators';
import { AuthService } from './../servicios/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {



  constructor(private auth:AuthService, private ruta:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): 
    Observable<boolean> {
     return this.auth.miUsuario$.pipe(
        take(1),
        map(user=>{
          return user? true:false
        }),
        tap(valido=>{
          if (valido===false){
            this.ruta.navigateByUrl("/login")
          }
        })
      )
  }
  


}
