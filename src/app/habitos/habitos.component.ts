import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-habitos',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './habitos.component.html',
  styleUrls: ['./habitos.component.css']
})
export class HabitosComponent implements OnInit {
  tareas: { nombre: string, completado: boolean }[] = [
    { nombre: 'Ejercicio', completado: false },
    { nombre: 'Leer 30 minutos', completado: false },
    { nombre: 'Meditar', completado: false },
  ];

  audio = new Audio();

  ngOnInit(): void {
    this.audio = new Audio('assets/felicidades.mp3'); 
    this.reiniciarSiEsNuevoDia();
    this.cargarTareas();
  }

  cargarTareas() {
    const data = localStorage.getItem('habitos_tareas');
    if (data) {
      this.tareas = JSON.parse(data);
    }
  }

  guardarTareas() {
    localStorage.setItem('habitos_tareas', JSON.stringify(this.tareas));
  }

  toggleTarea(index: number) {
    this.tareas[index].completado = !this.tareas[index].completado;
    this.guardarTareas();
  
    if (this.todasCompletadas()) {
      this.mostrarFelicitacion();
    }
  }
  

  todasCompletadas(): boolean {
    return this.tareas.every(t => t.completado);
  }

  mostrarFelicitacion() {
    alert('¡Felicidades, completaste tus hábitos de hoy! 🎉');
  
    this.audio.currentTime = 0; 
    this.audio.play().catch(err => {
      console.error('No se pudo reproducir el audio:', err);
    }); 
  }
  

  reiniciarSiEsNuevoDia() {
    const hoy = new Date().toDateString();
    const ultimaFecha = localStorage.getItem('habitos_ultima_fecha');
  
    if (hoy !== ultimaFecha) {
      this.tareas = [
        { nombre: 'Ejercicio', completado: false },
        { nombre: 'Leer 30 minutos', completado: false },
        { nombre: 'Meditar', completado: false },
      ];
      localStorage.setItem('habitos_ultima_fecha', hoy);
      this.guardarTareas();
    }
  }
  
}
