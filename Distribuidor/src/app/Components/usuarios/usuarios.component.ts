import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup} from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  profileForm = new FormGroup({
  nombre : new FormControl(''),
  apellido : new FormControl(''),
  telefono : new FormControl(''),
  cedula : new FormControl(''),
  correo : new FormControl(''),
  contrasena : new FormControl('')
  });
  
  constructor(protected http: HttpClient) { }
 
  ngOnInit(): void {
  }
  
  guardarDatos() {
    return this.http.get('https://localhost:8080/');
  }
}
