import { Component } from '@angular/core';

//Import Records Service into Em-info Component
import {RecordsService} from "../records.service";
@Component({
  selector: 'app-emp-info',
  templateUrl: './emp-info.component.html',
  styleUrls: ['./emp-info.component.css'],
  //Declare instance has been created into the component provider
  providers: [RecordsService]
})
export class EmpInfoComponent{

infoReceived1: String[]=[];
infoReceived2: String[]=[];
infoReceived3: String[]=[];

//Create a method to retrieve info from service
getInfoFromServiceClass1(){
  this.infoReceived1 =this.rservice.getInfo1()
}
getInfoFromServiceClass2(){
  this.infoReceived2 =this.rservice.getInfo2()
}
getInfoFromServiceClass3(){
  this.infoReceived3 =this.rservice.getInfo3()
}
//Create an object to access class variable and method
constructor(private rservice : RecordsService){

}

updateInfo(frm:any){
this.rservice.addInfo(frm.value.location)
}
}
