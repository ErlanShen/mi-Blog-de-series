import { CompartidoModule } from './compartido/compartido.module';
import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlogSingularComponent } from './blog-singular/blog-singular.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { InicioComponent } from './inicio/inicio.component';
import { BlogsComponent } from './blogs/blogs.component';
import { AngularFireModule } from '@angular/fire';
import { MiAdminModule } from './mi-admin/mi-admin.module';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { ConfirmadorDirective } from './directivas/confirmador.directive';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireStorageModule } from "@angular/fire/storage";


@NgModule({
  declarations: [
    AppComponent,
    BlogSingularComponent,
    CabeceraComponent,
    InicioComponent,
    BlogsComponent,
    LoginComponent,
    RegistroComponent,
    ConfirmadorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    CompartidoModule,
    MiAdminModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
