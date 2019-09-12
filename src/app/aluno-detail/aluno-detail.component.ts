import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlunoServiceService } from '../aluno/aluno-service.service';
import { Aluno } from '../aluno/aluno/Aluno';

@Component({
  selector: 'app-aluno-detail',
  templateUrl: './aluno-detail.component.html',
  styleUrls: ['./aluno-detail.component.css']
})
export class AlunoDetailComponent implements OnInit {

  aluno: Aluno = new Aluno();

  constructor(private route: ActivatedRoute, private alunoService: AlunoServiceService) { }

  ngOnInit() 
  {
    this.getAluno();
  }

  getAluno()
  {
    const id = this.route.snapshot.paramMap.get('id');
    this.aluno = this.alunoService.getAlunoById(id);
  }

}
