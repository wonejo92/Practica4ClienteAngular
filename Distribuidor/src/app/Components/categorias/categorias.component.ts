import {  Component, OnInit,Input} from '@angular/core';
import { CategoriasService } from '../../Services/categorias.service';
import { ActivatedRoute } from '@angular/router';
import { BodegasService } from '../../Services/bodegas.service';
@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  @Input() bodeg= {
    nombre: ''
  }
 public nombre:string;

  public categorias: any=[];
  constructor(private CatServise: CategoriasService,private actRoute:ActivatedRoute,private BodService: BodegasService) {
    this.produc();
   }

  ngOnInit(): void {
    this.CatServise.getCategorias()
    .subscribe( (data) =>{
      this.categorias=data;
      console.log(data) ;
    }, (error) =>{
      console.log(error)
    }
    );
  }

  produc(){
    this.nombre=this.actRoute.snapshot.params.nombre;   
    console.log("ljdgnk")
    console.log(this.nombre)
    this.BodService.getBodegaNombre(this.nombre).subscribe(data=>{
      console.log("Consume")

    });
  }

}
