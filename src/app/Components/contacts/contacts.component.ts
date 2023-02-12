import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/Services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit{
  constructor (public contactsService:ContactsService){}


  contactList: any
  msgTrue = false
  ngOnInit(): void {

  //this.contactList = this.contactsService.getContacts();

  this.contactsService.getContacts().subscribe(data=>{
    this.contactList = data
  })
  }

  addNewContact(){
    // Mock Form data that we get from the form

    const newFormData = {name :'Calvin',contactNumber :'25534567888',email:'calvin@gmail.com',password:'123456'}
    this.contactsService.createContact(newFormData).subscribe(data=>{
      console.log(data)
      this.msgTrue = true

    })
  }

}
