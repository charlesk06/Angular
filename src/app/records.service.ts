import { Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  // Create Array of three employee info 
  info1: String [] =["Charles Kimaro","UID001","charles@charles.com"]
  info2: String [] =["Joan Kimaro","UID002","Joan@charles.com"]
  info3: String [] =["Jael Kimaro","UID03","Jael@charles.com"]

  getInfo1(): String[]{
    return this.info1
  }
  getInfo2(): String[]{
    return this.info2
  }
  getInfo3(): String[]{
    return this.info3
  }

  addInfo(frm:any){
    this.info1.push(frm)
    this.info2.push(frm)
    this.info3.push(frm)
  }
  constructor() { }

}
