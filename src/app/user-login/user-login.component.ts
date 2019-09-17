import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private dataservice : DataService , private router : Router) { }

  ngOnInit() {
  }

  logUser(User,Password){
    console.log(User.value);
    console.log(Password.value);
    this.dataservice.login(User.value,Password.value).subscribe(
      res =>{
        var respuesta: string = res['inicio'];
        console.log('respuesta '+respuesta);
        if(respuesta == "1"){
          localStorage.setItem('NickName',User.value);
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

}
