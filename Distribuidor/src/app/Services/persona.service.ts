import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Usuario } from '../Modelo/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  usuario:Usuario
  constructor(private http:HttpClient) { }

  url='http://localhost:8080/Distribuidor/rest/personas';

  createUsuario(usuario:Usuario){
    return this.http.post<Usuario>(this.url,usuario);
  }
  
  
}