import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router'; 
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { ModalComponent } from './componentes/modal/modal/modal.component';
import { MainComponent } from './componentes/main/main/main.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { MuralComponent } from './componentes/mural/mural.component';
import { HttpClientModule } from '@angular/common/http';
import { ExcluirPerfilComponent } from './componentes/excluir-coluna/excluir-perfil.component';
import { EditarPerfilComponent } from './componentes/editar-perfil/editar-perfil.component';
@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    ModalComponent,
    MainComponent,
    PerfilComponent,
    MuralComponent,
    ExcluirPerfilComponent,
    EditarPerfilComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
