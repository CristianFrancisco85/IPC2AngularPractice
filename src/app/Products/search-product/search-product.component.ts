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
    this.dataservice.searchProducts(ProductName.value).subscribe( Productos => this.Productos = Productos);
  }

  addToCar(Button){
    var idproduct : number  = Button.id;
    var idshopcar : number  = parseInt(localStorage.getItem('ShopCarID'));
    var stock : number;
    //Se obtiene Stock
    this.dataservice.getProductStock(idproduct).subscribe(
      res =>{
        stock = res['ProductStock'];
        console.log('Stock: '+stock);
        if(stock>0){
          stock--;
          console.log('Stock Nuevo : '+stock);
          this.dataservice.updateProductStock(idproduct,stock).subscribe();
          //Se agrega a Carro
          this.dataservice.addProductToShopCar(idproduct,idshopcar).subscribe();
          //Se actualiza Stock en interfaz
          this.dataservice.getProducts().subscribe( Productos => this.Productos = Productos);
          alert("Producto Agregado al Carro");
        }
        else{
          alert("Producto Agotado")
        }
      }, (error) =>{
        console.error(error);
      },
    );
  }

  
}
