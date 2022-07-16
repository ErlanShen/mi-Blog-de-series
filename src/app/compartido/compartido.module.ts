import { VistaCategoriasComponent } from './../vista-categorias/vista-categorias.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import {MatSnackBarModule} from '@angular/material/snack-bar';


const misModulos = [
  FlexLayoutModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatMenuModule,
  MatChipsModule,
  MatTableModule,
  MatInputModule,
  FormsModule,
  MatSelectModule,
  MatFormFieldModule,
  ReactiveFormsModule,
  MatSlideToggleModule,
  MaterialFileInputModule,
  MatSnackBarModule
]


@NgModule({
  declarations: [
    VistaCategoriasComponent,
  ],
  exports: [
    misModulos,
    VistaCategoriasComponent,
  ],
  imports: [
    CommonModule,
    misModulos,
  ]
})
export class CompartidoModule { }
