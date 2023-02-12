import { Component } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor (public userService:UserService){}

  contactList: any
  msgTrue = false

  addNewUser(){
    // Mock Form data that we get from the form

    const newFormData = {FirstName :'Charles',LastName :'Kimaro',Title:'Developer',Country:'Tanzania',PostaCode:'340',City:'Dar es Salaam',Email:'cvkimaro1@gmail.com',ContactNumber:'255752402589',Password:'123456'}
    this.userService.creatUser(newFormData).subscribe((data)=>{
      console.log(data)
      this.msgTrue = true

    })
  }

}
