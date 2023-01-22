import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  // Create Array of three employee info 
  info1: String [] =["Charles Kimaro","Dar","charles@charles.com"]
  info2: String [] =["Joan Kimaro","Arusha","Joan@charles.com"]
  info3: String [] =["Jael Kimaro","Moshi","Jael@charles.com"]

  getInfo1(): String[]{
    return this.info1
  }
  getInfo2(): String[]{
    return this.info2
  }
  getInfo3(): String[]{
    return this.info3
  }

  constructor() { }
}
