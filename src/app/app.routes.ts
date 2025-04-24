import { Routes } from '@angular/router';
import { CategoriasComponent } from './categorias/categorias.component';
import { NotasComponent } from './notas/notas.component';
import { HabitosComponent } from './habitos/habitos.component';

export const routes: Routes = [
  { path: '', redirectTo: 'categorias', pathMatch: 'full' },
  { path: 'categorias', component: CategoriasComponent },
  { path: 'categorias/:categoria/notas', component: NotasComponent },
  { path: 'habitos', component: HabitosComponent }
];
