import { Categorias } from './categorias';

export interface MiBlog {
    titulo: string,
    subtitulo: string,
    foto: string,
    descripcion: string,
    id?: string,
    activo: boolean,
    autor: string,
    fotoautor: string,
    categoria: Categorias[],
    subtitulo2: string,
    descripcion2: string,
    foto2: string,
    fecha?:any,
}
