import { Categorias } from './../modelos/categorias';
import { Component, OnInit, Input, } from '@angular/core';

@Component({
  selector: 'app-vista-categorias',
  templateUrl: './vista-categorias.component.html',
  styleUrls: ['./vista-categorias.component.scss']
})
export class VistaCategoriasComponent implements OnInit {

  lasCategorias: Categorias[]
  @Input("datos") enviado: Categorias[]

  constructor() { }

  ngOnInit(): void {
  }

  
}
