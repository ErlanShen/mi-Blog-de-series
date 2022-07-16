import { MiBlog } from './../modelos/mi-blog';
import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Observable, of } from "rxjs";
import { map, switchMap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DatosBlogService {


  private direccionColeccion: AngularFirestoreCollection<MiBlog>
  private listaBlogs: Observable<MiBlog[]>
  private documento: AngularFirestoreDocument<MiBlog>

  constructor(private base: AngularFirestore) {
    this.direccionColeccion = this.base.collection<MiBlog>("blogs")
  }

  public getBlogso(): Observable<MiBlog[]> {
    this.listaBlogs = this.direccionColeccion.snapshotChanges().pipe(
      map(datos => datos.map(contenido => {
        const documente = contenido.payload.doc.data()
        const id = contenido.payload.doc.id
        let rearmado = { id, ...documente }
       // rearmado.fecha = rearmado.fecha.toDate()
        return rearmado
      }))
    )
    return this.listaBlogs
  }
  public getUnBlog(id: string) {
    return this.direccionColeccion.doc(id).snapshotChanges().pipe(
      map(data => {
        const documente = data.payload.data() as MiBlog
        const id = data.payload.id
        let rearmado = { id, ...documente }
       // rearmado.fecha = rearmado.fecha.toDate()
        return rearmado
      })
    )
  }

  addBlog(ojb: MiBlog) {
    this.direccionColeccion.add(ojb)
  }
  editBlog(obj: MiBlog) {
    this.documento = this.direccionColeccion.doc(obj.id)
    this.documento.update(obj)
  }
  deleteBlog(obj: MiBlog) {
    this.documento = this.direccionColeccion.doc(obj.id)
    this.documento.delete()
  }

  blogsPorCategoria(id : string){
    return this.getBlogso().pipe(
      map(valores=>valores.filter(blogs=>{
        let resultado:boolean=false
        blogs.categoria.forEach(elemento=>{
          if(elemento.id===id){
            resultado=true
          }
        })
        return resultado
      }))
    )
  }

  ultimoBlog():Observable<MiBlog>{
    return this.base.collection<MiBlog>("blogs",ultimo=>ultimo.orderBy("fecha","desc").limit(1)).snapshotChanges().pipe(
      map(tabla=>tabla.map(separados=>{
        const documento= separados.payload.doc.data()
        const id= separados.payload.doc.id
        return {id: id,...documento}
      })[0]
      )
    )
  }

  verDestacados():Observable<MiBlog[]>{
    this.listaBlogs=this.base.collection<MiBlog>('blogs',buscar=>buscar.where("activo","==",true)).snapshotChanges().pipe(
      map(base=>base.map(separados=>{
        const documento = separados.payload.doc.data()
        const id = separados.payload.doc.id
        return {id, ...documento}
      }))
    )
    return this.listaBlogs
  }

  activosBase():Observable<number>{
    return this.base.collection<MiBlog>('blogs',buscar=>buscar.where("activo","==",true)).snapshotChanges().pipe(
      switchMap(blogs=>{
        return of(blogs.length)
      })
    )
  }
}
