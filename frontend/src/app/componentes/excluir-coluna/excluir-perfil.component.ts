import { Component, OnInit } from '@angular/core';
import { PerfilService } from '../perfil.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Perfil } from '../perfil';

@Component({
  selector: 'app-excluir-perfil',
  templateUrl: './excluir-perfil.component.html',
  styleUrls: ['./excluir-perfil.component.css']
})
export class ExcluirPerfilComponent implements OnInit {
  perfil: Perfil = { 
    id: 0, 
    nome: '', 
    email: '', 
    descricao: '', 
    idade: '', 
    password: '', // Adicionando a propriedade de senha
    passwordConfirm: '' // Adicionando a propriedade de confirmação de senha
  }; 

  constructor(
    private service: PerfilService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      console.log('ID recebido:', id);
      this.service.buscarPorId(+id).subscribe((perfil) => {
        if (perfil) {
          this.perfil = perfil;
          console.log('Coluna encontrada:', this.perfil);
        }
      });
    }
  }

  excluirColuna(): void {
    this.service.excluirColuna(this.perfil.id).subscribe(response => {
      console.log('Perfil excluída:', response);
      this.router.navigate(['/componentes/mural']);
      location.reload();
    }, error => {
      console.error('Error exclude profile:', error);
      this.router.navigate(['/componentes/mural']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/componentes/mural']);
  }
}
