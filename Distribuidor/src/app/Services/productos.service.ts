import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private url : string;
  constructor(private http: HttpClient) { 
  this.url = '/Distribuidor/rest/prueba/ProductosByBodegaCategorias/'
  }
  /*
  getProductos(){
    return this.http.get('http://localhost:8080/Distribuidor/rest/prueba/ListaProductos');
    //http://localhost:8080/Distribuidor/rest/prueba/Categorias
    //http://localhost:8080/Distribuidor/rest/prueba/ListaProductos
  }*/

  getBodegaNombreCategoria(nombre:string, categoria:string){

    console.log(nombre)
    console.log(categoria)

    return this.http.post(this.url+nombre+'/'+categoria,
      {
       headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
       responseType: 'text'
       
     }
   );
    



  }
}
