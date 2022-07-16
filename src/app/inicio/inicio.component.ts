import { MiBlog } from './../modelos/mi-blog';
import { DatosBlogService } from './../servicios/datos-blog.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent{
  blogUltimo:MiBlog
  
  blogDestacados:MiBlog[]

  constructor(
    private servico : DatosBlogService,
  ) { 
    this.servico.ultimoBlog().subscribe(ultimo=>{
      this.blogUltimo=ultimo
    })
    this.servico.verDestacados().subscribe(blog=>{
      this.blogDestacados=blog
    })
  }


}
