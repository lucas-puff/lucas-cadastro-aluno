import { Injectable } from '@angular/core';
import { Aluno } from './aluno/Aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoServiceService 
{
  alunos: Aluno[] = [];

  constructor() { }

  cadastrarAluno(aluno: Aluno)
  {
    console.log("Recebido no service:");
    console.log(aluno);
    this.alunos.push(aluno);
    console.log(this.alunos);
  }

  getAlunos()
  {
    return this.alunos;
  }

  getAlunoById(id: String)
  {
    return this.alunos.find(aluno => aluno.id == id);
  }
}
