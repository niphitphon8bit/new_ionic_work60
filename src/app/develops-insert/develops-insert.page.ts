import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-develops-insert',
  templateUrl: './develops-insert.page.html',
  styleUrls: ['./develops-insert.page.scss'],
})
export class DevelopsInsertPage implements OnInit {

  constructor(private location: Location) { }

  private develops = [
    {
      Name : '',
      NameEng : '',
      Status : ''
    } ]


  ngOnInit() {
  }

  addvalue(Name,NameEng ){

  }
  
  insert_develop(){
  
    this.location.back();
  }


}
