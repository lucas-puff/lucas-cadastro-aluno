import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlunoServiceService } from '../aluno-service.service';
import { Aluno } from './Aluno'

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit 
{
  aluno: Aluno = new Aluno();
  alunos: Aluno[] = [];
  

  constructor(private alunoService: AlunoServiceService) { }

  ngOnInit() 
  {
    this.aluno.sexo = 'Masculino';
    this.aluno.descontoExAluno = false;
    this.aluno.descontoPromocional = false;
    this.aluno.descontoTrabalhadorIndustrial = false;
  }

  onSubmit(formulario: NgForm)
  {
    if(formulario.valid)
    {
      /*
      console.log(formulario);
      console.log('----- Valores do formulario');
      console.log(formulario.form.value);
      console.log('----- Valores do objeto');
      console.log(this.aluno);
      */

      this.alunoService.cadastrarAluno(this.aluno);

      this.aluno = new Aluno();
      this.aluno.sexo = 'Masculino';
      this.aluno.descontoExAluno = false;
      this.aluno.descontoPromocional = false;
      this.aluno.descontoTrabalhadorIndustrial = false;
      

      this.alunos = this.alunoService.getAlunos();
    }
  }

}
