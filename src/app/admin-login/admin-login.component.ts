import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private dataservice : DataService , private router : Router) { }

  ngOnInit() {
  }
  logAdmin(User,Password){
    console.log(User.value);
    console.log(Password.value);
    this.dataservice.loginAdmin(User.value,Password.value).subscribe(
      res =>{
        let respuesta: string = res['inicio'];
        console.log('Boolean Login: '+respuesta);
        if(respuesta == "1"){
          this.router.navigate(['admin-module']);
        }
        else{
          alert('Usuario o contraseña no valido');
          this.router.navigate(['admin-login']);
        }
      }, (error) =>{
        console.error(error);
      },
    );
  }

}
