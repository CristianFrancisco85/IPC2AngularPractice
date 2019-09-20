import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/DataTypes';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from 'src/app/data.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-product-admin',
  templateUrl: './search-product-admin.component.html',
  styleUrls: ['./search-product-admin.component.css']
})
export class SearchProductAdminComponent implements OnInit {

  Productos : Product [];

  constructor(private dataservice :DataService ,private router : Router ) { }

  ngOnInit() {
  }

  searchProduct(ProductName){
    this.dataservice.searchProducts(ProductName.value).subscribe( Productos => this.Productos = Productos);
  }

  deleteProduct(Button){
    if (confirm("¿Esta seguro de eliminar el producto?")) {
      this.dataservice.deleteProduct(Button.id).subscribe(res =>{
        if(res=='0'){
          alert('No se puede eliminar producto, tiene datos referenciados en la base de datos')
        }
        else{
          alert('Producto Eliminado');
        }
    });
      this.dataservice.searchProducts(" ").subscribe( Productos => this.Productos = Productos);
    } 
    else {
      
    }
  }

  editProduct(Button){
    localStorage.setItem('ProductID',Button.id);
    this.router.navigate(['admin-module/modify-product']);
  }

}
