import { Component, OnInit,Input } from '@angular/core';
import {Router} from '@angular/router';
import {Usuario} from 'src/app/Modelo/persona';
import { IniciosesionService } from '../../Services/iniciosesion.service';


@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {
  usuario :Usuario

  @Input() InicioDetails = {
    correo:'', contrasena:''
  }

  constructor(
    public dataService: IniciosesionService,
    public router: Router,
  ) { 
    
  }

  ngOnInit(): void {

  }
  

  addInicio(dataBill) {
    this.dataService.iniciar(this.InicioDetails).subscribe((data: {}) => {
      this.router.navigate(['/home'])
    })
  }


}
