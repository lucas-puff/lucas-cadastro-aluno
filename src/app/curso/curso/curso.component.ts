import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CursoserviceService } from '../cursoservice.service'
import { Curso } from './Curso'

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  curso: Curso = new Curso();
  cursos: Curso[] = [];
  

  constructor(private cursoService: CursoserviceService) { }

  ngOnInit() 
  {
   
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
      console.log(this.curso);
      */
      this.curso.id = 
      Math.random().toString(36).substring(2,15)
      + Math.random().toString(36).substring(1,15);
      this.cursoService.cadastraCurso(this.curso);
      this.curso = new Curso();
      this.cursos = this.cursoService.getCursos();

      
      console.log(this.cursos);
      
    }
  }
}
