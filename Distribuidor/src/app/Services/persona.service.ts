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
    /*
    let json =JSON.stringify(this.usuario);
    let params="json" +json;
    let headers=new HttpHeaders().set('Content-Type','applicacion/x-www-form-urlencoded');
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'POST');
    headers.append('Access-Control-Allow-Origin', '*');
    */
    console.log(usuario);
    return this.http.post<Usuario>(this.url,usuario);
  }
  
  
}
