import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  }
  getAllTemas() {
    return this.http.get('http://172.17.64.1:9000/tema', this.token)
  }
  getByIdTema(id: number) {
    return this.http.get(`http://172.17.64.1:9000/tema/${id}`, this.token)
  }
  postTema(tema: Tema) {
    return this.http.post('http://172.17.64.1:9000/tema', tema, this.token)
  }
  putTema(tema: Tema) {
    return this.http.put('http://172.17.64.1:9000/tema', tema, this.token)
  }
  deleteTema(id: number) {
    return this.http.delete(`http://172.17.64.1:9000/tema/${id}`, this.token)
  }
  getByNomeTema(nome: string) {
    return this.http.get(`http://172.17.64.1:9000/tema/nome/${nome}`, this.token)
  }

}