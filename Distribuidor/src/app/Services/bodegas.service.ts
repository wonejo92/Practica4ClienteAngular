import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { BodegasComponent } from '../Components/bodegas/bodegas.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BodegasService {

  constructor(private http: HttpClient) { }
  getBodegas():Observable<any>{
    return this.http.get<any>("/Distribuidor/rest/prueba/Bodegas");
  }
  getBodegaNombre(nombre:String){
return this.http.post<any>("/Distribuidor/rest/prueba/bode/",nombre)
  }
}
