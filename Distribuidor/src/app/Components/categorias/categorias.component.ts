import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../../Services/categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  public categorias: any=[];
  constructor(private CatServise: CategoriasService) { }

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

}
