import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  getProductos(){
    return this.http.get('http://localhost:8080/Distribuidor/rest/prueba/ListaProductos');
    //http://localhost:8080/Distribuidor/rest/prueba/Categorias
    //http://localhost:8080/Distribuidor/rest/prueba/ListaProductos
  }
}
