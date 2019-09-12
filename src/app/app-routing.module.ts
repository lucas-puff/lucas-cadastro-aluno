import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CursoComponent } from './curso/curso/curso.component';
import { AlunoComponent } from './aluno/aluno/aluno.component'
import { CursoDetailComponent } from './curso-detail/curso-detail.component';
import { CursoListagemComponent } from './curso-listagem/curso-listagem.component';
import { AlunoDetailComponent } from './aluno-detail/aluno-detail.component';
import { AlunoListagemComponent } from './aluno-listagem/aluno-listagem.component';

const routes: Routes = [
  {path: 'alunos', component:AlunoComponent},
  {path: 'alunodetail/:id', component: AlunoDetailComponent},
  {path: 'alunolista', component: AlunoListagemComponent},
  {path: 'cursos', component:CursoComponent},
  {path: 'cursodetail/:id', component: CursoDetailComponent},
  {path: 'cursolista', component: CursoListagemComponent},
  {path: '',redirectTo:'/cursos', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
