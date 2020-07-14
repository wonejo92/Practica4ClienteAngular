import { Component, OnInit,Input } from '@angular/core';
import { PersonaService } from '../../Services/persona.service';
import {Router} from '@angular/router';
import {Usuario} from 'src/app/Modelo/persona';
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  form: FormGroup;
  usuario :Usuario

  @Input() UsuarioDetails = {
    nombres: '', apellidos: '', telefono: '', cedula: '',
    correo:'', contrasena:''
  }

  constructor(
    public dataService: PersonaService,
    public router: Router,
    public fb: FormBuilder,
    private http: HttpClient
  ) { 

    this.form = this.fb.group({
      nombres: [''],
      apellidos: [''],
      telefono:[''],
      cedula:[''],
      correo:[''],
      contrasena:['']
    })
  }

    
  ngOnInit(): void {
   
  }

  add() {
    console.log(this.form.value);
    var formData: any = new FormData();
    formData.append("nombres", this.form.get('nombres').value);
    formData.append("apellidos", this.form.get('apellidos').value);
    formData.append("telefono", this.form.get('telefono').value);
    formData.append("cedula", this.form.get('cedula').value);
    formData.append("correo", this.form.get('correo').value);
    formData.append("contrasena", this.form.get('contrasena').value);
    this.http.post('/Distribuidor/rest/prueba/personas',formData).subscribe(data  => {
    console.log('creado' ,data);
    })
  }

}
