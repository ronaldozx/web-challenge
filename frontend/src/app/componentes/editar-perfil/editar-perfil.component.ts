import { Component, OnInit } from '@angular/core';
import { PerfilService } from '../perfil.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Perfil } from '../perfil';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {
  perfil: Perfil = { 
    id: 0, 
    nome: '', 
    email: '', 
    descricao: '', 
    idade: '', 
    password: '', 
    passwordConfirm: '' 
  }; 

  constructor(private perfilService: PerfilService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.perfilService.buscarPorId(parseInt(id!)).subscribe((perfil) => {
      this.perfil = perfil;
    });
  }

  editarColuna(): void {
    this.perfilService.editarColuna(this.perfil).subscribe(response => {
      console.log('Coluna editada:', response);
      this.router.navigate(['/componentes/mural']);
    }, error => {
      console.error('Error creating profile:', error);
      this.router.navigate(['/componentes/mural']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/componentes/mural']);
  }
}
