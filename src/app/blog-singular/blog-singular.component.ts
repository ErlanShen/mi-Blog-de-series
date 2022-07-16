import { MiBlog } from './../modelos/mi-blog';
import { Component } from '@angular/core';
import { DatosBlogService } from '../servicios/datos-blog.service';
import {ActivatedRoute} from "@angular/router"

@Component({
  selector: 'mikiMouse',
  templateUrl: './blog-singular.component.html',
  styleUrls: ['./blog-singular.component.scss']
})
export class BlogSingularComponent {

  blog:MiBlog

  constructor(private servicioBlog: DatosBlogService, private rutas: ActivatedRoute) {

//    this.blog=this.servicioBlog.getBlogsId(this.rutas.snapshot.params.id)

    this.servicioBlog.getUnBlog(this.rutas.snapshot.params.id).subscribe(resultado=>{
      this.blog=resultado
    })


  }
}