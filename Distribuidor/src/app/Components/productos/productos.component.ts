import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../Services/productos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  public productos: any=[];
  public option: any;
  public item:any;
  public obj:any;
  public opcion:any;
   nombre:string;
   categoria:string;
  
  constructor(private proService: ProductosService,private actRoute:ActivatedRoute ) { 
    this.nombre=actRoute.snapshot.params.nombre;
    this.categoria=actRoute.snapshot.params.categoria;
  }

  ngOnInit(): void {
    this.proService.getProductos()
    .subscribe( (data) =>{
      this.productos=data;
      console.log(data) ;
    }, (error) =>{
      console.log(error)
    }
    );
  }
}

