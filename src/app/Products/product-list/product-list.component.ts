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
