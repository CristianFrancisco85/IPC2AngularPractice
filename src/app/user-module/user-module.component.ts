import { Component, OnInit } from '@angular/core';
import { OkPacket } from '../DataTypes';
import {DataService} from '../data.service'

@Component({
  selector: 'app-user-module',
  templateUrl: './user-module.component.html',
  styleUrls: ['./user-module.component.css']
})
export class UserModuleComponent implements OnInit {

  Res:string;

  constructor(private dataservice : DataService ) { }

  ngOnInit() {
    this.dataservice.generateShopCar().subscribe( Respuesta => {localStorage.setItem('ShopCarID',Respuesta);});
  }

}
