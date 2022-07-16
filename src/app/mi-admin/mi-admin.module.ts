import { MiAdminRoutingModule } from './mi-admin-routing.module';
import { CompartidoModule } from './../compartido/compartido.module';
import { AddCategoriaComponent } from './../add-categoria/add-categoria.component';
import { AddBlogComponent } from './../add-blog/add-blog.component';
import { AdminCategoriaComponent } from './../admin-categoria/admin-categoria.component';
import { FormularioCategoriasComponent } from './../formulario-categorias/formulario-categorias.component';
import { FormularioComponent } from './../formulario/formulario.component';
import { AdminComponent } from './../admin/admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiAdminComponent } from './mi-admin.component';
import { GaleriaComponent } from './galeria/galeria.component';



@NgModule({
  declarations: [
    AdminComponent,
    FormularioComponent,
    FormularioCategoriasComponent,
    AdminCategoriaComponent,
    AddBlogComponent,
    AddCategoriaComponent,
    MiAdminComponent,
    GaleriaComponent,
  ],
  imports: [
    CommonModule,
    CompartidoModule,
    MiAdminRoutingModule
  ]
})
export class MiAdminModule { }
