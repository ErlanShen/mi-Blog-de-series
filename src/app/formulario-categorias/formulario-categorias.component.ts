import { DatosCategoriaService } from './../servicios/datos-categoria.service';
import { Categorias } from './../modelos/categorias';
import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-categorias',
  templateUrl: './formulario-categorias.component.html',
  styleUrls: ['./formulario-categorias.component.scss']
})
export class FormularioCategoriasComponent {

  VerCategoria: Categorias

  constructor(
    private rut:Router,
    private rutas: ActivatedRoute,
    private servicio: DatosCategoriaService) {
    this.servicio.getUnaCategoria(this.rutas.snapshot.params.id).subscribe(dato => {
      this.VerCategoria = dato
    })
  }

  actualizar(editar: Categorias) {
    this.servicio.editCategorias(editar)
    this.rut.navigateByUrl("/admin/adminCategoria")
  }
}
