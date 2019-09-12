import { Component, OnInit } from '@angular/core';
import { AlunoServiceService } from '../aluno/aluno-service.service';
import { Aluno } from '../aluno/aluno/Aluno';

@Component({
  selector: 'app-aluno-listagem',
  templateUrl: './aluno-listagem.component.html',
  styleUrls: ['./aluno-listagem.component.css']
})
export class AlunoListagemComponent implements OnInit {
  alunos: Aluno[] = [];

  constructor(private alunoService: AlunoServiceService) { }

  ngOnInit() {
    this.alunos = this.alunoService.getAlunos();
  }

}
