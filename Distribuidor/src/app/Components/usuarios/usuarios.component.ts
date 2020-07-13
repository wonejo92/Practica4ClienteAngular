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

  usuario:Usuario;

  constructor(private service:PersonaService ,private router:Router) { 
    this.usuario=new Usuario();
  }
  

  ngOnInit(): void {
   
  }
  
  guardarDatos(usuario:Usuario) {
   this.service.createUsuario(usuario)
   .subscribe(data=>{
     alert("se agrego");
   })
  }

  guardar(){
    alert('Guardando')
    this.service.createUsuario(this.usuario).subscribe(result => this.gotoContactosList);
  }

  gotoContactosList() {
    this.router.navigate(['/InicioSesion']);
  }
}
