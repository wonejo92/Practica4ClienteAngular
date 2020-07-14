import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../Modelo/persona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private url: string;
 
  
  constructor(private http:HttpClient) { 
    this.url='/Distribuidor/rest/prueba/personas';
    
    
  }
  
  createUsuario(usuario:Usuario) :Observable<Usuario>{
    console.log(usuario)
    return this.http.post<Usuario>(this.url,usuario);
  }
  
  
}
