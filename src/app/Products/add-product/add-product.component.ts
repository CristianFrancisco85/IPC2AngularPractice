import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { Provider,Product } from 'src/app/DataTypes';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  Proveedores: Provider [];
  Productos :  Product [];

  constructor(private dataservice : DataService , private router : Router) { }

  ngOnInit() {
    this.dataservice.getProviders().subscribe( Proveedores => this.Proveedores = Proveedores);
    this.dataservice.getProducts().subscribe( Productos => this.Productos = Productos);
  }

  RegisterProduct(Nombre,Stock,Precio,Descripcion){
    this.dataservice.addProduct(Nombre.value,Stock.value,Precio.value,Descripcion.value).subscribe((result) =>{
        console.log(result);
        alert("Producto Agregado");
    });
    this.dataservice.getProducts().subscribe( Productos => this.Productos = Productos);
    //this.router.navigate(['admin-module']);
  }

  RegisterProvider(SelectProduct,SelectProvider){
    this.dataservice.setProductProvider(SelectProduct.value,SelectProvider.value).subscribe((result) =>{
      console.log(result);
      alert("Proveedor enlazado con Producto");
    });
  }

}
