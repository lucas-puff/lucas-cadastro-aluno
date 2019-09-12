import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursoserviceService } from '../curso/cursoservice.service';

@Component({
  selector: 'app-curso-detail',
  templateUrl: './curso-detail.component.html',
  styleUrls: ['./curso-detail.component.css']
})
export class CursoDetailComponent implements OnInit {

  curso: any = new Object();

  constructor( 
    private route: ActivatedRoute,
    private cursoService: CursoserviceService,
    private location: Location) { }


    ngOnInit(): void {
      this.getCurso();
    }

    getCurso(): void {
      const id = this.route.snapshot.paramMap.get('id');
      this.curso = this.cursoService.getCursoById(id);
    }

}
