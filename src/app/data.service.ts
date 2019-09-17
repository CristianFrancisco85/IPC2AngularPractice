import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {  Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})


export class DataService {

  constructor(private http: HttpClient){

  }

  login(username:string, password:string) {
    return this.http.post('http://localhost:3000/login',{
      nickname: username,
      password: password,
    });   
  }

}
