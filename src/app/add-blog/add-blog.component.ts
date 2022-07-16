import { MiBlog } from './../modelos/mi-blog';
import { Categorias } from './../modelos/categorias';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosCategoriaService } from './../servicios/datos-categoria.service';
import { DatosBlogService } from './../servicios/datos-blog.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss']
})
export class AddBlogComponent {

  verBlog={
    titulo: "",
    subtitulo: "",
    foto: "",
    descripcion: "",
    activo: false,
    autor: "",
    fotoautor: "",
    categoria: [],
    subtitulo2: "",
    descripcion2: "",
    foto2: "",
    fecha:"",
  }
  verCategorias: Categorias[]
  constructor(
    private servicio: DatosBlogService,
    private servicioCat: DatosCategoriaService,
    private rutas: ActivatedRoute,
    private router:Router
  ) {
    this.servicio.getUnBlog(this.rutas.snapshot.params.id).subscribe()
    
    this.servicioCat.getCategorias().subscribe(datos => {
      this.verCategorias = datos
    })
  }

  comparador(obj1, obj2): boolean {

    let resultado: boolean = false
    if (obj1.nombre === obj2.nombre) {
      resultado = true
    }
    return resultado
  }

  agregar(nuevo: MiBlog) {
    this.servicio.addBlog(nuevo)
    this.router.navigateByUrl("/admin")
  }

}
