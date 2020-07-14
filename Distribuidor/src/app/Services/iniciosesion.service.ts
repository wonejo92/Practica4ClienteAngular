import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Usuario } from '../Modelo/persona';

@Injectable({
  providedIn: 'root'
})
export class IniciosesionService {
  private url: string;
  
  constructor(private http:HttpClient) {
    this.url='/Distribuidor/rest/prueba/inicio';
   }

   
  iniciar(usuario:Usuario){

    console.log(usuario);

    const body = new HttpParams()
    .set('correo',usuario.correo)
    .set('contrasena',usuario.contrasena);

    return this.http.post(
      this.url,
      body.toString(),
      {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
        responseType: 'text'
      }
    );
    //return this.http.post<Usuario>(this.url,usuario);

  }
  
}
