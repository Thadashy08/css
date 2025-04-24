import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  guardar(clave: string, datos: any) {
    localStorage.setItem(clave, JSON.stringify(datos));
  }

  leer(clave: string): any {
    const item = localStorage.getItem(clave);
    return item ? JSON.parse(item) : null;
  }
}
