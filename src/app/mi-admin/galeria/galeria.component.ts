import { MatSnackBar } from '@angular/material/snack-bar';
import { GaleriaService } from './../../servicios/galeria.service';
import { Foto } from './../../modelos/foto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {

  misFotos: Foto[] = []
  invisible: boolean = false
  allPhotos: Foto[]

  constructor(private storage: GaleriaService, private snackbar: MatSnackBar) {
    this.storage.getFotos().subscribe(base => {
      this.allPhotos = base
      console.log(base)
    })
  }

  ngOnInit(): void {
  }
  ver(evento: any) {
    const archivos = evento.target.files
    for (let i = 0; i < archivos.length; i++) {
      this.misFotos[i] = {
        archivo: archivos[i],
        nombre: (new Date()).getMilliseconds() + archivos[i].lastModified + archivos[i].name,
        fecha: new Date(),
      }
    }
  }

  subir(foto: Foto[]) {
    this.storage.subirFoto(foto)
  }
  mensajeSave(message: string, action: string) {
    this.snackbar.open("Subiendo Imagenes - Espere!.", "Cerrar", {
      duration: 1500,
    });
}

  copiar(foto: string) {
    navigator.clipboard.writeText(foto)
  }
  mensajeCopy(message: string, action: string) {
    this.snackbar.open("Enlace Copiado!.", "Cerrar", {
      duration: 1500,
    });
  }
  eliminar(obt:Foto,message:string) {
    this.storage.deletePhoto(obt)
    this.snackbar.open("Eliminado","OK",{duration:1500,})
  }
}
