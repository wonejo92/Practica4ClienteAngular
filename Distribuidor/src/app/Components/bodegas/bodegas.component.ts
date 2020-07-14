import { Component, OnInit } from '@angular/core';
import { BodegasService } from '../../Services/bodegas.service';
import { Bodega } from '../../Modelo/Bodegas';

@Component({
  selector: 'app-bodegas',
  templateUrl: './bodegas.component.html',
  styleUrls: ['./bodegas.component.css'],
  providers:[BodegasService],
})
export class BodegasComponent implements OnInit {

  public bodegas: any=[]
  public bode:Bodega;
 //public nombre:String;

  constructor(private BodService: BodegasService) { }

  ngOnInit(): void {
    this.BodService.getBodegas()
    .subscribe( (data) =>{
      this.bodegas=data;
      console.log(data) ;
    }, (error) =>{
      console.log(error)
    }
    );


  }
  boo(nombre:any){
     this.BodService.getBodegaNombre(nombre)
     .subscribe( (data) =>{
      nombre=data;
      console.log("Holaaaaaaaaaaaaaaaa")
      console.log(data) ;
    }, (error) =>{
      console.log(error)
    }
    );    
  }
}
