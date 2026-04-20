import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {TurmaComponent} from "./views/turma/turma.component";
import {AlunoComponent} from "./views/aluno/aluno.component";
import {MatriculaComponent} from "./views/matricula/matricula.component";

const routes: Routes = [
  { path: '', redirectTo: '/alunos', pathMatch: 'full' },
  { path: 'turma', component: TurmaComponent },
  { path: 'turma/:id', component: TurmaComponent },
  { path: 'aluno', component: AlunoComponent },
  { path: 'aluno/:id', component: AlunoComponent },
  { path: 'matricula', component: MatriculaComponent },
  { path: 'matricula/:id', component: MatriculaComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
