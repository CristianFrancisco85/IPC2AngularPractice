import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/DataTypes';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {

  Productos : Product [];

  constructor(private dataservice :DataService ) { }

  ngOnInit() {
  }

  searchProduct(ProductName){
    console.log("Jola");
    this.dataservice.searchProducts(ProductName.value).subscribe( Productos => this.Productos = Productos);
  }
}
