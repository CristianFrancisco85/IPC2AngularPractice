import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {  Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from './DataTypes'
import { Provider } from './DataTypes'
import { OkPacket } from './DataTypes'

@Injectable({
  providedIn: 'root'
})


export class DataService {

  constructor(private http: HttpClient){

  }

  // ----------- USUARIO ------------------
  login(username:string, password:string) {
    return this.http.post('http://localhost:3000/loginUser',{
      nickname: username,
      password: password,
    });   
  }

  getUserID(usernickname:string){
    return this.http.post('http://localhost:3000/userId',{
      nickname: usernickname
    });  
  }

  addUser(Firstname:string,SecondName:string,Nickname:string,Password:string,UserType:string){
    return this.http.post('http://localhost:3000/newUser',{
      firstname: Firstname,
      secondname : SecondName,
      nickname : Nickname,
      passwd : Password,
      usertype : UserType
    });
  }

  checkNickName(Nickname:string, ) {
    return this.http.post('http://localhost:3000/verifyNickname',{
      nickname: Nickname
    });   
  }

  // ----------- PRODUCTOS -----------------

  getProducts(): Observable<Product[]> { 
    return this.http.get<Product[]>('http://localhost:3000/products');  
  } 

  addProduct(Name:string,Stock:number,Price:number,Description:string){
    return this.http.post('http://localhost:3000/newProduct',{
      name: Name,
      stock : Stock,
      price : Price,
      description : Description
    });
  }

  searchProducts(productname:string): Observable<Product[]> { 
    return this.http.get<Product[]>('http://localhost:3000/searchProducts/'+productname);  
}

  setProductProvider(IDProduct:number,IDProvider:number){
    return this.http.post('http://localhost:3000/setProductProvider',{
      idproduct :IDProduct,
      idprovider : IDProvider
    });
  }
  //------------------PROVEEDORES---------------------

  addProvider(Name:string,Address:string,PhoneNumber:string){
    return this.http.post('http://localhost:3000/newProvider',{
      name: Name,
      address : Address,
      phonenumber : PhoneNumber
    });
  }

  getProviders(): Observable<Provider[]> { 
    return this.http.get<Provider[]>('http://localhost:3000/getProviders');  
  } 
  

  //------------------ADMIN---------------------
  loginAdmin(username:string, password:string) {
    return this.http.post('http://localhost:3000/loginAdmin',{
      nickname: username,
      password: password,
    });   
  }

  //------------------SHOPCAR---------------------
  generateShopCar(){
    return this.http.get<string>('http://localhost:3000/generateShopCar');
  }
}
