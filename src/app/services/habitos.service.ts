import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class HabitosService {
  private HABITOS_KEY = 'habitos';

  getHabitos(): any[] {
    return JSON.parse(localStorage.getItem(this.HABITOS_KEY) || '[]');
  }

  guardarHabitos(habitos: any[]) {
    localStorage.setItem(this.HABITOS_KEY, JSON.stringify(habitos));
  }

  marcarComoHecho(index: number) {
    const habitos = this.getHabitos();
    habitos[index].hecho = true;
    this.guardarHabitos(habitos);
  }

  reiniciarHabitos() {
    const habitos = this.getHabitos().map(h => ({ ...h, hecho: false }));
    this.guardarHabitos(habitos);
  }
}
