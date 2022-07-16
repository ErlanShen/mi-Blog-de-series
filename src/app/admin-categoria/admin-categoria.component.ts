import { Categorias } from './../modelos/categorias';
import { DatosCategoriaService } from './../servicios/datos-categoria.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-categoria',
  templateUrl: './admin-categoria.component.html',
  styleUrls: ['./admin-categoria.component.scss']
})
export class AdminCategoriaComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'color', 'acciones'];
  tablaCat;

  constructor(private servicioCat: DatosCategoriaService) {
    this.servicioCat.getCategorias().subscribe(datos => {
      this.tablaCat = datos
    })
  }

  ngOnInit(): void {
  }

  borrar(deleteCat: Categorias) {
    console.log(deleteCat)
    this.servicioCat.deleteCategorias(deleteCat)
  }
}
