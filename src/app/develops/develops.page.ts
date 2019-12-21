import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-develops',
  templateUrl: './develops.page.html',
  styleUrls: ['./develops.page.scss'],
})
export class DevelopsPage implements OnInit {

  constructor() { }

private develops = [
{
  Name : 'ด้านการพัฒนา',
  NameEng : 'eng',
  Status : 'true'
},{
  Name : 'ด้านวิจัย',
  NameEng : 'eng',
  Status : 'true'
},{
  Name : 'ด้านสื่อสาร',
  NameEng : 'eng',
  Status : 'false'
},


]


  ngOnInit() {
  }

remove(develop){
  let index = this.develops.indexOf(develop);
  if(index > -1){
    this.develops.splice(index,1);
  }
}



}
