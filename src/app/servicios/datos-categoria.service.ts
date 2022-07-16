import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Categorias } from './../modelos/categorias';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DatosCategoriaService {

  private direccionColeccion: AngularFirestoreCollection<Categorias>
  private listaCategorias: Observable<Categorias[]>
  private documento : AngularFirestoreDocument<Categorias>

  constructor(private baseDatos: AngularFirestore){
    this.direccionColeccion= this.baseDatos.collection<Categorias>("categorias")
  }

  public getCategorias(): Observable<Categorias[]> {
    this.listaCategorias = this.direccionColeccion.snapshotChanges().pipe(
      map(datos => datos.map(contenido => {
        const documente = contenido.payload.doc.data()
        const id = contenido.payload.doc.id
        return { id, ...documente }
      }))
    )
    return this.listaCategorias
  }
  public getUnaCategoria(id: string) {
    return this.direccionColeccion.doc(id).snapshotChanges().pipe(
      map(data => {
        const documente = data.payload.data() as Categorias
        const id = data.payload.id
        return { id, ...documente }
      })
    )
  }

  addCategorias(ojb:Categorias){
    this.direccionColeccion.add(ojb)
  }
  editCategorias(obj:Categorias){
    this.documento=this.direccionColeccion.doc(obj.id)
    this.documento.update(obj)
  }
  deleteCategorias(obj:Categorias){
    this.documento=this.direccionColeccion.doc(obj.id)
    this.documento.delete()
  }
}
