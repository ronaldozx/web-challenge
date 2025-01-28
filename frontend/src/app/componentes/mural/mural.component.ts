import { Component, OnInit } from '@angular/core';
import { PerfilService } from '../perfil.service';
import { Perfil } from '../perfil';

@Component({
  selector: 'app-mural',
  templateUrl: './mural.component.html',
  styleUrls: ['./mural.component.css']
})
export class MuralComponent implements OnInit {

  listaPerfil: Perfil[] = [];

  constructor(private service: PerfilService) { }

  ngOnInit(): void {
    this.service.listar().subscribe(
      (listaPerfil) => {
        console.log('Colunas carregadas:', listaPerfil);
        this.listaPerfil = listaPerfil;
      },
      (error) => {
        console.error('Erro ao carregar colunas:', error);
      }
    );
  }
}
