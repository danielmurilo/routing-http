import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../interfaces/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosApiService {

  private readonly APIurl: string = 'http://localhost:3000/produtos'

  constructor(private http: HttpClient) { }

  listarProdutos(){
    return this.http.get<Produto[]>(this.APIurl)
  }
}
