import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { }
  getCategorias(){
    return this.http.get("http://localhost:8080/Distribuidor/rest/prueba/Categorias");
  }
}
