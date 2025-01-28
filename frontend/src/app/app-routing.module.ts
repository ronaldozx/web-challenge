import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExcluirPerfilComponent } from './componentes/excluir-coluna/excluir-perfil.component';
import { MuralComponent } from './componentes/mural/mural.component';
import { EditarPerfilComponent } from './componentes/editar-perfil/editar-perfil.component';
import { ModalComponent } from './componentes/modal/modal/modal.component';

const routes: Routes = [
  { path: 'componentes/excluirPerfil/:id', component: ExcluirPerfilComponent },
  { path: 'componentes/mural', component: MuralComponent },
  { path: 'componentes/editarPerfil/:id', component: EditarPerfilComponent },
  { path: 'componentes/criarPerfil', component: ModalComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
