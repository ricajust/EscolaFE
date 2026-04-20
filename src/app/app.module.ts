import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Views
import { AppComponent } from './app.component';
import { TurmaComponent } from "./views/turma/turma.component";
import { AlunoComponent } from './views/aluno/aluno.component';
import { MatriculaComponent } from './views/matricula/matricula.component';

//Routers
import { AppRoutingModule } from './app-routing.module';

//Components
import { HeaderComponent } from "./components/header/header.component";

@NgModule({
  declarations: [
    AppComponent,
    TurmaComponent,
    AlunoComponent,
    MatriculaComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
