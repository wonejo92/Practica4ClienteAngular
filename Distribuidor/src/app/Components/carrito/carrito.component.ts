import { Component, OnInit } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { element } from 'protractor';
import { JsonPipe } from '@angular/common';
import { Producto } from '../../Modelo/Producto';
import { ProductosService } from '../../Services/productos.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  public CarritoProductos: any=[];
  public index: any;
  public total: any;

  public total2:any=[];
  public totalF:number=0;
  public totalIva :number=0;
  public Arreglo: any=[];

  constructor(private proService: ProductosService) {this.cargarProductos(),this.calcular() }

  ngOnInit(): void {
  }

  cargarProductos(){
    this.CarritoProductos=JSON.parse(localStorage.getItem('ListProducts'));
    console.log("LISTA DE COMPRAS",this.CarritoProductos)
  }


  calcular(){

    console.log('recupero y calculo',this.CarritoProductos)
    //Creacion de foreach
    let cantidades: string;
    let precio: string;
    for(let productos of this.CarritoProductos){
      cantidades=(productos.cantidad)
      precio=(productos.pun)
      console.log(cantidades)
      console.log(precio) 

      var total: number;
      total=parseFloat (precio)*parseFloat(cantidades);
      console.log('Resultado de la suma es de',total) 
      this.total2.push(total)
    }
    console.log('total2------------->',this.total2)
    for(let totales of this.total2){
      console.log(totales)
      this.totalF=this.totalF+totales;
      this.totalIva=(this.totalF*12/100);
    }
    this.totalF=this.totalF+this.totalIva
    console.log('valor a pagar con iva',this.totalIva)
    console.log('Valor total a pagar',this.totalF)
  }


  eliminaritem(nombre: number){
    console.log(nombre)
    //Permite eliminar y actualizar la lista
    var indice=this.CarritoProductos.indexOf(0);
    this.CarritoProductos.splice(nombre,1)
    console.log("Areglo eliminao un producto",this.CarritoProductos)
    localStorage.setItem('ListProducts',JSON.stringify(this.CarritoProductos))
    this.Arreglo=localStorage.getItem('ListProducts')
    console.log("Seteado en un local storange",this.Arreglo)
    window.location.reload()
  }

  facturar(){
    this.Arreglo=JSON.parse(localStorage.getItem('ListProducts'));

    console.log(this.Arreglo)

    this.proService.AddProductosCarito2(this.Arreglo)
  .subscribe( (data) =>{
    //this.pro=data;
    console.log(data) ;
  }, (error) =>{
    console.log(error)
  }
  );










    console.log('Se procede a persistir en la BD',this.Arreglo)
  }
}
