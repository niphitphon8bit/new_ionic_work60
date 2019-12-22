import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-expert-type',
  templateUrl: './expert-type.page.html',
  styleUrls: ['./expert-type.page.scss'],
})
export class ExpertTypePage implements OnInit {
 
  constructor() { }

  private index_of_types = [
    {
      title: 'วิทยากรบรรยาย',
      status: 'true'
    },

    {
      title: 'วิทยากรพี่เลี้ยง',
      status: 'false'
    },

    {
      title: 'วิทยากรสันทนาการ',
      status: 'true'
    },

    {
      title: 'วิทยากรพี่กลุ่ม',
      status: 'false'
    }
  ];
  ngOnInit() {
  }
  remove_expert_type(index_of_type){
    let index = this.index_of_types.indexOf(index_of_type);
    if(index > -1){
      this.index_of_types.splice(index,1);
    }
  }
}
