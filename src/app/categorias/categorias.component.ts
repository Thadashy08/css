import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  imports: [CommonModule, RouterModule],  
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {
  categorias = ['Personal', 'Trabajo', 'Estudios'];

  constructor(private router: Router) {}

  irANotas(categoria: string) {
    this.router.navigate(['/notas', categoria]);
  }

  irAHabitos() {
    this.router.navigate(['/habitos']);
  }
}
