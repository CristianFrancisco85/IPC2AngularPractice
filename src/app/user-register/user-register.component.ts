import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  constructor(private dataservice : DataService , private router : Router) { }

  ngOnInit() {
  }

  RegisterUser(Nombres,Apellidos,Nickname,Contrasena,SelectType){
    this.dataservice.checkNickName(Nickname.value).subscribe(
      res =>{
        let respuesta: string = res['inicio'];
        console.log('Boolean Login: '+respuesta);
        if(respuesta == "1"){
          alert("Nickname ya existe")
        }
        else{
          this.dataservice.addUser(Nombres.value,Apellidos.value,Nickname.value,Contrasena.value,SelectType.value)
          .subscribe((result) =>{
            console.log(result);
          });
          this.router.navigate(['user-login']);
        }
      }, (error) =>{
        console.error(error);
      },
    );
  }
}
