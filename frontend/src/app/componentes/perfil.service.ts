import { Injectable } from '@angular/core';
import { Perfil } from './perfil';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  private readonly API = 'http://localhost:8000/api';
  private static lastId: number = 0; 
  constructor(private http: HttpClient) {}

  listar(): Observable<Perfil[]> {
    return this.http.get<Perfil[]>(this.API).pipe(tap(perfils => {
      PerfilService.lastId = perfils.reduce((max, perfil) => Math.max(max, perfil.id), 0);
    }));
  }

 
  

  criarColuna(perfil: Perfil): Observable<Perfil> {
    perfil.id = ++PerfilService.lastId; 
    return this.http.post<Perfil>(this.API, perfil);
  }

 


  editarColuna(perfil: Perfil): Observable<Perfil> {
    const url = `${this.API}/${perfil.id}`; 
    return this.http.put<Perfil>(url, perfil);
  }

  excluirColuna(id: number): Observable<Perfil> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Perfil>(url);
  }


  buscarPorId(id: number): Observable<Perfil> {
    const url = `${this.API}/${id}`;
    return this.http.get<Perfil>(url);
  }
}
