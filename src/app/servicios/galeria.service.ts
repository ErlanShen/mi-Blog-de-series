import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Foto } from './../modelos/foto';
import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GaleriaService {

  private coleccion: AngularFirestoreCollection<Foto>
  private documento: AngularFirestoreDocument<Foto>
  private listaFotos: Observable<Foto[]>

  constructor(private storage: AngularFireStorage, private base: AngularFirestore) { 
    this.coleccion=this.base.collection<Foto>("galerias")
  }

  subirFoto(fotos: Foto[]) {
    fotos.forEach(elemento => {
      const direccion = `${"galerias/" + elemento.nombre + "/" + elemento.nombre}`
      const referencia = this.storage.ref(direccion)
      const subir = this.storage.upload(direccion, elemento.archivo)
      subir.snapshotChanges().pipe(
        finalize(() => {
          referencia.getDownloadURL().subscribe(enlace => {
            elemento.archivo=enlace
            this.coleccion.add(elemento)
          })
        })
      ).subscribe()
    })
  }

  public getFotos():Observable<Foto[]>{
    this.listaFotos = this.coleccion.snapshotChanges().pipe(
      map(fotos=> fotos.map(contenido=>{
        const docu = contenido.payload.doc.data()
        const id = contenido.payload.doc.id
        let imagen={id, ...docu}
        return imagen
      }))
    )
    return this.listaFotos
  }

  deletePhoto(obj:Foto){
    this.storage.storage.refFromURL(obj.archivo).delete()
    this.documento=this.coleccion.doc(obj.id)
    this.documento.delete()
  }

}
