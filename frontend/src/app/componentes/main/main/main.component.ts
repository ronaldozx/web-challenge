import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  isModalVisible: boolean = false;
  

  constructor(private router: Router) {}

  navegarParaModal() {
    this.router.navigate(['/componentes/criarPerfil']); 
  }

  
}
