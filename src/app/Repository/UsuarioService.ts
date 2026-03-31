import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUsuario } from '../Interfaces/UsuarioModel';
import { Injectable } from '@angular/core';

// Conecta com a "API" Json server
@Injectable({ providedIn: 'root' })
export class UsuarioService {
  urlApi = 'http://localhost:3000/usuarios/';

  constructor(private http: HttpClient) {}

  getUsuarios() {
    return this.http.get<IUsuario[]>(this.urlApi);
  }

  getUsuario(id: number) {
    return this.http.get<IUsuario>(this.urlApi + id);
  }

  addUsuario(record: IUsuario) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf8');

    return this.http.post<IUsuario>(this.urlApi, JSON.stringify(record), {
      headers: headers,
    });
  }

  updateUsuario(record: IUsuario) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf8');

    return this.http.put<IUsuario>(
      this.urlApi + record.id,
      JSON.stringify(record),
      {
        headers: headers,
      },
    );
  }

  deleteUsuario(id: number) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf8');

    return this.http.delete(this.urlApi + id, {
      headers: headers,
    });
  }
}
