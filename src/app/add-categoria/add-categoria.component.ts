import { DatosCategoriaService } from './../servicios/datos-categoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorias } from './../modelos/categorias';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-categoria',
  templateUrl: './add-categoria.component.html',
  styleUrls: ['./add-categoria.component.scss']
})
export class AddCategoriaComponent{

  VerCategoria: Categorias={
    nombre:"",
    color:"#000000",
  }

  constructor(
    private router:Router,
    private servicio: DatosCategoriaService) {
  }

  nuevo(crear:Categorias){
    this.servicio.addCategorias(crear)
    this.router.navigateByUrl("/admin/adminCategoria")
  }
}
