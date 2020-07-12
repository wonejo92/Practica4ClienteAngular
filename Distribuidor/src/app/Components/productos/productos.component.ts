import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../Services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  public productos: any=[];

  public item:any;
  public obj:any;
  public opcion:any;
  public option='OPTION';

  
  constructor(private proService: ProductosService ) { }

  ngOnInit(): void {
    this.proService.getProductos()
    .subscribe( (data) =>{
      this.productos=data;
      console.log(data);
    }, (error)=>{
      console.log(error)
      
    }

    
    )
  }

  

}
