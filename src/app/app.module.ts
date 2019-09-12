import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CursoComponent } from './curso/curso/curso.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AlunoComponent } from './aluno/aluno/aluno.component';
import { AppRoutingModule } from './app-routing.module';
import { CursoDetailComponent } from './curso-detail/curso-detail.component';
import { CursoListagemComponent } from './curso-listagem/curso-listagem.component';
import { AlunoListagemComponent } from './aluno-listagem/aluno-listagem.component';
import { AlunoDetailComponent } from './aluno-detail/aluno-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    CursoComponent,
    AlunoComponent,
    CursoDetailComponent,
    CursoListagemComponent,
    AlunoListagemComponent,
    AlunoDetailComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
