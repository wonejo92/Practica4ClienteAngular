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
    public router: Router,
  ) { 

   
  }

    
  ngOnInit(): void {
   
  }
<<<<<<< HEAD
  //Meotodo para agregar Usuarios.
=======


>>>>>>> c15dced814dcd5fd2e1d8b79e884d650d41ef7de
  add(dataBill) {
    this.dataService.createUsuario(this.UsuarioDetails).subscribe((data: {}) => {
      this.router.navigate(['/InicioSesion'])
    })
  }

 

}
