import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { OkPacket } from '../DataTypes';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  Res : OkPacket;

  constructor(private dataservice : DataService , private router : Router) { }

  ngOnInit() {
  }

  logUser(User,Password){
    this.dataservice.login(User.value,Password.value).subscribe(
      res =>{
        let respuesta: string = res['inicio'];
        console.log('Boolean Login: '+respuesta);
        if(respuesta == "1"){
          this.saveUserId(User.value);
          this.router.navigate(['user-module']);
        }
        else{
          alert('Usuario o contraseña no valido');
          this.router.navigate(['user-login']);
        }
      }, (error) =>{
        console.error(error);
      },
    );
  }

  saveUserId(NickName:string){
    this.dataservice.getUserID(NickName).subscribe(
      res =>{
        let respuesta: string = res['UserID'];
        console.log('IDUser: '+respuesta);
        localStorage.setItem('UserID',respuesta);
      }, (error) =>{
        console.error(error);
      },
    );

  }


}
