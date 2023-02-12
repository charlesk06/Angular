import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  constructor(private httpClient:HttpClient) { }

  getContacts(){

    //headers
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type','application/json')

    //Get HTTP get Method working for you
    return this.httpClient.get('localhost:8181/User/all-users')

  }
  
  createContact(createBody: { name: string; contactNumber: string; email: string; password: string; }){
    return this.httpClient.post('http://localhost:8181/User/signup',createBody)
    
  }

  callingFromTemplate(){
    console.log('Calling direct from template')
  }

}
