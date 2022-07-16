import { DatosCategoriaService } from './../servicios/datos-categoria.service';
import { Categorias } from './../modelos/categorias';
import { DatosBlogService } from './../servicios/datos-blog.service';
import { MiBlog } from './../modelos/mi-blog';
import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {

  verBlog: MiBlog
  verCategorias: Categorias[]

  constructor(
    private rutas: ActivatedRoute,
    private servicio: DatosBlogService,
    private servicioCat: DatosCategoriaService,
    private router: Router
  ) {
    this.servicio.getUnBlog(this.rutas.snapshot.params.id).subscribe(dato => {
      this.verBlog = dato
    })
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

  guardar(blog: MiBlog) {
    this.servicio.editBlog(blog)
    this.router.navigateByUrl("/admin")
  }
}
