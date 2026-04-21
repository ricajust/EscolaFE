import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

//Views
import { AppComponent } from './app.component';
import { TurmaComponent } from "./views/turma/turma.component";
import { AlunoComponent } from './views/aluno/aluno.component';
import { MatriculaComponent } from './views/matricula/matricula.component';

//Routers
import { AppRoutingModule } from './app-routing.module';

//Components
import { HeaderComponent } from "./components/header/header.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Forms
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

//Material components
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatNativeDateModule } from "@angular/material/core";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { TableComponent } from './components/table/table.component';
import { MatTableModule } from "@angular/material/table";

@NgModule({
  declarations: [
    AppComponent,
    TurmaComponent,
    AlunoComponent,
    MatriculaComponent,
    HeaderComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
