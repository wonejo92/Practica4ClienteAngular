import { Component, OnInit } from '@angular/core';
import { BodegasService } from '../../Services/bodegas.service';

@Component({
  selector: 'app-bodegas',
  templateUrl: './bodegas.component.html',
  styleUrls: ['./bodegas.component.css']
})
export class BodegasComponent implements OnInit {

  public bodegas: any=[]

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
}
