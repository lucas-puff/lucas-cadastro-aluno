import { Component, OnInit } from '@angular/core';
import { CursoserviceService } from '../curso/cursoservice.service';
import { Curso } from '../curso/curso/Curso';

@Component({
  selector: 'app-curso-listagem',
  templateUrl: './curso-listagem.component.html',
  styleUrls: ['./curso-listagem.component.css']
})
export class CursoListagemComponent implements OnInit {

  cursos: Curso[] = [];
  constructor(private cursoService: CursoserviceService) { }

  ngOnInit() 
  {
    this.cursos = this.cursoService.getCursos();
  }


}
