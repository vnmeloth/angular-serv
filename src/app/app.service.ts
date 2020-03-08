import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable()
export class AppService {

data:User;
_http:HttpClient;
  constructor(http:HttpClient) { 
   this._http = http;
  }
  getdetails()
  {
    
    return this._http.get<User>('https://jsonplaceholder.typicode.com/todos/1').subscribe(
      data => {this.data= data; console.log(this.data)}
    );
    ;
  }

}