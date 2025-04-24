import { Injectable } from '@angular/core';
import { HabitosService } from './habitos.service';

@Injectable({ providedIn: 'root' })
export class ReinicioDiarioService {
  private FECHA_KEY = 'ultimaFecha';

  constructor(private habitosService: HabitosService) {
    this.verificar();
  }

  private verificar() {
    const hoy = new Date().toDateString();
    const ultima = localStorage.getItem(this.FECHA_KEY);
    if (ultima !== hoy) {
      this.habitosService.reiniciarHabitos();
      localStorage.setItem(this.FECHA_KEY, hoy);
    }
  }
}
