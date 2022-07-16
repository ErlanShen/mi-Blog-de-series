import { MiBlog } from './../modelos/mi-blog';
import { DatosBlogService } from './../servicios/datos-blog.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  displayedColumns: string[] = ['id', 'titulo', 'foto', 'descripcion', 'categorias', 'acciones'];
  pelota: MatTableDataSource<MiBlog> = new MatTableDataSource();
  nActivos: number = 0


  constructor(private datos: DatosBlogService) {
    this.datos.getBlogso().subscribe(datos => {
      this.pelota.data = datos

    })
    this.datos.activosBase().subscribe(activo => {
      this.nActivos = activo
    })
  }

  ngOnInit(): void {

  }
  borrar(blog: MiBlog) {
    this.datos.deleteBlog(blog)
  }
  cambiar(event: any, blog: MiBlog) {
    blog.activo=event.checked
    this.datos.editBlog(blog)
  }


}
