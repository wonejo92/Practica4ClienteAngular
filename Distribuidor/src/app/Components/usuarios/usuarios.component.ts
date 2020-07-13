import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../Services/persona.service';
import {Router} from '@angular/router';
import {Usuario} from 'src/app/Modelo/persona';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
 
  personas:Usuario[];
  constructor(private service:PersonaService ,private router:Router) { }
 
  ngOnInit(): void {
    
  }
  
  guardarDatos(persona:Usuario) {
   this.service.createUsuario(persona)
   .subscribe(data=>{
     alert("se agrego");
   })
  }
}
