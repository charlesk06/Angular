import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient ) { }
   //Get Contact Method
   getUsers(){

    //Declare constant header variable
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type','application/json')
  

    //Get HTTP get Method working for you
    return this.httpClient.get('http://localhost:8181/User/all-users')

  }
  
  creatUser(createBody: { FirstName: string; LastName: string; Title: string; Country: string; PostaCode: string; City: string; Email: string; ContactNumber: string; Password: string; }){
    return this.httpClient.post('http://localhost:8181/User/signup',createBody)
    
  }

  callingFromTemplate(){
    console.log('Calling direct from template')
  }
}
