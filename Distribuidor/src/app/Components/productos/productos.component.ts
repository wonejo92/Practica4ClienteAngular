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
   public nombre:string;
  public categoria:string;
  
  constructor(private proService: ProductosService,private actRoute:ActivatedRoute ) { 
   // this.nombre=actRoute.snapshot.params.nombre;
   // this.categoria=actRoute.snapshot.params.categoria;
    this.produc();
    console.log(this.nombre);
    console.log(this.categoria);
  }

  ngOnInit(): void {
    /*
    this.proService.getProductos()
    .subscribe( (data) =>{
      this.productos=data;
      console.log(data) ;
    }, (error) =>{
      console.log(error)
    }
    );*/
  }
 

  produc(){
    this.nombre=this.actRoute.snapshot.params.nombre; 
    this.categoria=this.actRoute.snapshot.params.categoria;  
    console.log(this.nombre)
    console.log(this.categoria)
    this.proService.getBodegaNombreCategoria(this.nombre,this.categoria)
    .subscribe((data)=>{
      console.log(data)
      this.productos=data;
      console.log('Hola putitos')
      console.log(this.productos)

    });
}
}

