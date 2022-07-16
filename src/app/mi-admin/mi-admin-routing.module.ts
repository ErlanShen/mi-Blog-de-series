import { GaleriaComponent } from './galeria/galeria.component';
import { AdminComponent } from './../admin/admin.component';
import { AddCategoriaComponent } from './../add-categoria/add-categoria.component';
import { AddBlogComponent } from './../add-blog/add-blog.component';
import { FormularioCategoriasComponent } from './../formulario-categorias/formulario-categorias.component';
import { AdminCategoriaComponent } from './../admin-categoria/admin-categoria.component';
import { FormularioComponent } from './../formulario/formulario.component';
import { MiAdminComponent } from './mi-admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path:"",
        component:MiAdminComponent,
        children:[
            {
                path:"",
                redirectTo:"inicio",
                pathMatch:"full",
            },
            {
                path:"inicio",
                component:AdminComponent
            },
            {
                path: "formulario/:id",
                component: FormularioComponent
              },
              {
                path: "adminCategoria",
                component: AdminCategoriaComponent
              },
              {
                path: "formularioCategoria/:id",
                component: FormularioCategoriasComponent
              },
              {
                path: "addBlog",
                component: AddBlogComponent
              },
              {
                path: "addCategoria",
                component: AddCategoriaComponent
              },
              {
                path:"galeria",
                component:GaleriaComponent
              }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiAdminRoutingModule { }