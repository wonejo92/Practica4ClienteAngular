import { Component, OnInit } from '@angular/core';
import { IniciosesionService } from '../../Services/iniciosesion.service';
//import { InicioSesionComponent } from '../inicio-sesion/inicio-sesion.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public correop:any
  public coo:any
  constructor(public dataService: IniciosesionService,private actRoute:ActivatedRoute,  public router: Router) { 
    this.correop =actRoute.snapshot.params.correop;
  }

  ngOnInit(): void {
   
  }

  eliminar(){
   //this.correop= this.dataComponent.correop
   console.log(this.correop)
   /*
   let corr=JSON.stringify(this.correop)
   
    console.log('corr')
    console.log(corr)
   
    let corr1=JSON.parse(corr)
    console.log(corr1)
    */
   this.dataService.eliminacion(this.correop).subscribe((data)  => {
    this.redi()
   /*console.log('data')
    let da=data
    console.log(da)
    alert('entro')
   */
    //this.router.navigate(['/InicioSesion'])
    //return this.router.navigate(['/InicioSesion'])
    //return this.router.navigateByUrl('/InicioSesion')
    //window.location.reload();
  })
}

redi(){
    //console.log('redi')
    this.router.navigate(['/InicioSesion'])
}

}
