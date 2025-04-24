import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notas',
  standalone: true,
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css'],
  imports: [CommonModule, FormsModule, RouterModule] 
})
export class NotasComponent implements OnInit {
  categoria: string = '';
  notas: string[] = [];
  nuevaNota: string = '';
  notaEditandoIndex: number | null = null;
  notaEditada: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.categoria = params.get('categoria') || '';
      this.cargarNotas();
    });
  }

  cargarNotas() {
    const data = localStorage.getItem(`notas_${this.categoria}`);
    this.notas = data ? JSON.parse(data) : [];
  }

  guardarNotas() {
    localStorage.setItem(`notas_${this.categoria}`, JSON.stringify(this.notas));
  }

  agregarNota() {
    if (this.nuevaNota.trim()) {
      this.notas.push(this.nuevaNota.trim());
      this.nuevaNota = '';
      this.guardarNotas();
    }
  }

  eliminarNota(index: number) {
    this.notas.splice(index, 1);
    this.guardarNotas();
  }

  editarNota(index: number) {
    this.notaEditandoIndex = index;
    this.notaEditada = this.notas[index];
  }

  guardarEdicion(index: number) {
    if (this.notaEditada.trim()) {
      this.notas[index] = this.notaEditada.trim();
      this.notaEditandoIndex = null;
      this.notaEditada = '';
      this.guardarNotas();
    }
  }

  cancelarEdicion() {
    this.notaEditandoIndex = null;
    this.notaEditada = '';
  }
}
