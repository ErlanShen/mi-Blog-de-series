import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Usuario } from './../modelos/usuario';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';


@Injectable({

  providedIn: 'root'
})
export class AuthService {

  public miUsuario$: Observable<Usuario>
  private miColeccion: AngularFirestoreCollection<Usuario>


  constructor(
    private auth: AngularFireAuth,
    private router: Router,
    private base: AngularFirestore) {
    this.miColeccion = this.base.collection<Usuario>("usuarios")
    this.miUsuario$ = this.auth.authState.pipe(
      switchMap(datosAU => {
        if (datosAU) {
          return this.miColeccion.doc(datosAU.uid).valueChanges()
        }
        else{
          return of(null)
        }

      })
    )
  }

  sessionCorreo(correo: string, clave: string) {
    return this.auth.signInWithEmailAndPassword(correo, clave)
  }

  cerrarSesion() {
    return this.auth.signOut().then(() => {
      this.router.navigateByUrl("/inicio")
    })
  }

  registrarCorreo(correo: string, clave: string) {
    return this.auth.createUserWithEmailAndPassword(correo, clave).then(usuario => {
      usuario.user.sendEmailVerification()
      let nuevoUser: Usuario = {
        uid: usuario.user.uid,
        displayName: usuario.user.displayName,
        email: usuario.user.email,
        emailVerified: usuario.user.emailVerified,
        photoURL: usuario.user.photoURL,
        phoneNumber: usuario.user.phoneNumber
      }
      this.miColeccion.doc(usuario.user.uid).set(nuevoUser)
    })

  }
}
