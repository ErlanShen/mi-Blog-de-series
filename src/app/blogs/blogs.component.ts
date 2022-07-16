import { Categorias } from './../modelos/categorias';
import { DatosCategoriaService } from './../servicios/datos-categoria.service';
import { MiBlog } from './../modelos/mi-blog';
import { DatosBlogService } from './../servicios/datos-blog.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent {
  misBlogs: MiBlog[]
  misCats: Categorias[]
  constructor(
    private miServicio: DatosBlogService,
    private ServicoCat: DatosCategoriaService
  ) {
    this.miServicio.getBlogso().subscribe(resultado => {
      this.misBlogs = resultado
    })
    this.ServicoCat.getCategorias().subscribe(resultado => {
      this.misCats = resultado
    })
  }

  verClick(categoria: string) {
    this.miServicio.blogsPorCategoria(categoria).subscribe(resultado => {
      this.misBlogs = resultado
    })
  }
  todos(){
    this.miServicio.getBlogso().subscribe(resultado => {
      this.misBlogs = resultado
    })
  }

  
}
