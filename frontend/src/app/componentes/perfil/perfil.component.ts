import { Component, Input, OnInit } from '@angular/core';
import { Perfil } from '../perfil'; // Interface Colunas
import { PerfilService } from '../perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  @Input() perfil!: Perfil; 

  constructor(private service: PerfilService) {}

  ngOnInit(): void {
  }

  
  
}
