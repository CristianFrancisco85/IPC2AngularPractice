import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrls: ['./add-provider.component.css']
})
export class AddProviderComponent implements OnInit {

  constructor(private dataservice : DataService , private router : Router) { }

  ngOnInit() {
  }

  RegisterProvider(Nombre,Direccion,Telefono){
    this.dataservice.addProvider(Nombre.value,Direccion.value,Telefono.value).subscribe((result) =>{
        console.log(result);
        alert("Proveedor Agregado");
      });
      this.router.navigate(['admin-module']);
  }
}
