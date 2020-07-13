import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BodegasService {

  constructor(private http: HttpClient) { }

  getBodegas(){
    return this.http.get("http://localhost:8080/Distribuidor/rest/prueba/Bodegas");
  }
}
