import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-develops-insert',
  templateUrl: './develops-insert.page.html',
  styleUrls: ['./develops-insert.page.scss'],
})
export class DevelopsInsertPage implements OnInit {

  constructor() { }

  private develops = [
    {
      Name : '',
      NameEng : '',
      Status : ''
    } ]


  ngOnInit() {
  }

  addvalue(Name,NameEng ){
    this.route.queryParams.subscribe(this.develops,{
      NameEng:NameEng
      });
  }
  


}
