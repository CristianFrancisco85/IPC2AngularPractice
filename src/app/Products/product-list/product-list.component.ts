import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/DataTypes';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  Productos : Product [];

  constructor(private dataservice :DataService ) { }

  ngOnInit() {
    this.dataservice.getProducts().subscribe( Productos => this.Productos = Productos);
  }

  addToCar(Button){
    var idproduct = Button.id;
    console.log(idproduct);
  }

}
