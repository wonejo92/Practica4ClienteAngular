import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../Services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  public productos: any=[];
<<<<<<< HEAD
  public option: any;
=======

  public item:any;
  public obj:any;
  public opcion:any;
  public option='OPTION';
>>>>>>> 79369c144a96e90708ebd004b46674333026a5d7

  
  constructor(private proService: ProductosService ) { }

  ngOnInit(): void {
    this.proService.getProductos()
    .subscribe( (data) =>{
      this.productos=data;
      console.log(data);
    }, (error)=>{
      console.log(error)
<<<<<<< HEAD
    } 
=======
      
    }

    
>>>>>>> 79369c144a96e90708ebd004b46674333026a5d7
    )
  }

  

}
