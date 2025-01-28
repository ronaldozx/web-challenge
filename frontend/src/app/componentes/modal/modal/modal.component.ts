import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Perfil } from '../../perfil';
import { PerfilService } from '../../perfil.service';
import { Router } from '@angular/router';

let nextId = 1;
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() isVisible: boolean = false; // Recebe a visibilidade do modal
  @Output() closeModal = new EventEmitter<void>(); // Emite evento para fechar o modal
  @Output() perfilAdded = new EventEmitter<string>(); // Emite o nome da coluna
  
  perfil: Perfil = {
    id: nextId++,
    nome: '',
    email: '',
    descricao: '',
    idade: '',
    password: '',
    passwordConfirm: ''
  };
  
  perfils: Perfil[] = []; 

  constructor(private service: PerfilService, private router: Router) {
    this.service.listar().subscribe(perfils => {
      this.perfils = perfils; 
    });
  }

  criarColuna() {
    if (this.perfil.password !== this.perfil.passwordConfirm) {
      console.error('As senhas não coincidem.');
      alert('As senhas não coincidem. Por favor, tente novamente.');
      return;
    }
    
    console.log('Creating profile:', this.perfil); 
    this.service.criarColuna(this.perfil).subscribe(() => {
      console.log('Profile created successfully');
      this.perfilAdded.emit(); 
      this.perfil.nome = ''; 
      this.router.navigate(['/componentes/mural']); 
    }, error => {
      console.error('Error creating profile:', error);
      this.router.navigate(['/componentes/mural']); 
    });
  }

  cancelar(): void {
    this.router.navigate(['/componentes/mural']);
  }

  confirm() {
    this.criarColuna(); // Call the method to create a column
  }
}
