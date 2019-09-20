import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/DataTypes';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from 'src/app/data.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-shop-car',
  templateUrl: './shop-car.component.html',
  styleUrls: ['./shop-car.component.css']
})
export class ShopCarComponent implements OnInit {

  Productos : Product [];

  constructor(private dataservice :DataService,private router : Router ) { }

  ngOnInit() {
    console.log(parseInt(localStorage.getItem('ShopCarID')));
    this.dataservice.getCarProducts(parseInt(localStorage.getItem('ShopCarID'))).subscribe( Productos => this.Productos = Productos);
  }

  buyProducts(){
    this.dataservice.generateBill(parseInt(localStorage.getItem('UserID'))).subscribe( Respuesta => {
      localStorage.setItem('BillID',Respuesta);
      this.dataservice.makePurchase(parseInt(localStorage.getItem('BillID')),parseInt(localStorage.getItem('ShopCarID'))).subscribe();
    });
    alert('Compra Realizada');
    this.router.navigate(['user-login']);
  }

}
