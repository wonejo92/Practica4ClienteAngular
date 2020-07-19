import { Component, OnInit ,Input} from '@angular/core';
import { IniciosesionService } from '../../Services/iniciosesion.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Usuario } from '../../Modelo/persona';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {
  public correop:any
  usuario:Usuario

  @Input() ActualizarDetails = {
    nombres:'',apellidos:'',telefono:'',cedula:'',
    correo:'', contrasena:''
  }
  constructor(public dataService: IniciosesionService,private actRoute:ActivatedRoute,  public router: Router) {
    this.correop =actRoute.snapshot.params.correop;
   }

  ngOnInit(): void {
  }


  actualiza(dataBill){
   console.log(this.correop)
   this.dataService.createUsuario(this.correop,this.ActualizarDetails).subscribe((data)  => {
    this.router.navigate(['/InicioSesion'])
  })
}
}
