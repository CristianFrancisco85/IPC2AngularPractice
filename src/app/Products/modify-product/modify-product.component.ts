import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { Provider,Product } from 'src/app/DataTypes';

@Component({
  selector: 'app-modify-product',
  templateUrl: './modify-product.component.html',
  styleUrls: ['./modify-product.component.css']
})
export class ModifyProductComponent implements OnInit {

  constructor(private dataservice : DataService , private router : Router) { }

  ngOnInit() {
  }

  EditProduct(Nombre,Stock,Precio,Descripcion){
    let idp = parseInt(localStorage.getItem('ProductID'));
    this.dataservice.editProduct(idp,Nombre.value,Stock.value,Precio.value,Descripcion.value).subscribe(res =>{
      if(res=='0'){
        alert('No se puede editar producto')
      }
      else{
        alert('Producto Editado');
        localStorage.removeItem('ProductID');
        this.router.navigate(['admin-module/search-product-admin']);
      }
  });

  }

}
