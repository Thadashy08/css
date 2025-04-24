import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NotasService {
  private CLAVE = 'notasPorCategoria';

  getNotas(categoriaId: string): any[] {
    const todas = JSON.parse(localStorage.getItem(this.CLAVE) || '{}');
    return todas[categoriaId] || [];
  }

  agregarNota(categoriaId: string, texto: string) {
    const todas = JSON.parse(localStorage.getItem(this.CLAVE) || '{}');
    if (!todas[categoriaId]) todas[categoriaId] = [];
    todas[categoriaId].push({ texto, fecha: new Date() });
    localStorage.setItem(this.CLAVE, JSON.stringify(todas));
  }
}
