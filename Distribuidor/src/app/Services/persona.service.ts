import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Usuario } from '../Modelo/persona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private url: string;
  usuario:Usuario
  
  constructor(private http:HttpClient) { 
    this.url='http://localhost:8080/Distribuidor/rest/prueba/personas';
    
  }
  
  
   
  createUsuario(usuario:Usuario) :Observable<Usuario>{
    return this.http.post<Usuario>(this.url,usuario);
  }
  
  
}
