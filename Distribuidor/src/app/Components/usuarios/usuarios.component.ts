import { Component, OnInit,Input } from '@angular/core';
import { PersonaService } from '../../Services/persona.service';
import {Router} from '@angular/router';
import {Usuario} from 'src/app/Modelo/persona';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuario :Usuario

  @Input() UsuarioDetails = {
    nombres: '', apellidos: '', telefono: '', cedula: '',
    correo:'', contrasena:''
  }

  constructor(
    public dataService: PersonaService,
    public router: Router
  ) { }

  ngOnInit(): void {
   
  }

  add(dataBill) {
    return this.dataService.createUsuario(this.UsuarioDetails).subscribe(data  => {
      console.log(this.UsuarioDetails.nombres);
      console.log(this.UsuarioDetails.apellidos);
      console.log(this.UsuarioDetails.cedula);
      console.log(this.UsuarioDetails.telefono);
      console.log(this.UsuarioDetails.correo);
      console.log(this.UsuarioDetails.contrasena);
      console.log(this.UsuarioDetails)
      console.log('creado' ,data);
    })
  }

}
