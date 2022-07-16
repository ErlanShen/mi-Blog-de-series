import { BloqueoLoginGuard } from './guards/bloqueo-login.guard';
import { LoginGuard } from './guards/login.guard';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { BlogsComponent } from './blogs/blogs.component';
import { InicioComponent } from './inicio/inicio.component';
import { BlogSingularComponent } from './blog-singular/blog-singular.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    redirectTo: "inicio",
    pathMatch: "full"
  },
  {
    path: "singular/:id",
    component: BlogSingularComponent
  },
  {
    path: "inicio",
    component: InicioComponent
  },
  {
    path: "blogs",
    component: BlogsComponent
  },
  {
    path: "admin",
    loadChildren:()=>import("./mi-admin/mi-admin.module").then(modulo=>modulo.MiAdminModule),
    canActivate:[LoginGuard]
  },
  {
    path:"login",
    component:LoginComponent,
    canActivate:[BloqueoLoginGuard]
  },
  {
    path:"registro",
    component:RegistroComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path: "**",
    redirectTo: "inicio"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
