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


  add(dataBill) {
    this.dataService.createUsuario(this.UsuarioDetails).subscribe(data  => {
      console.log('creado' ,data);
    });

  }

}
