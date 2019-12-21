import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expert-in',
  templateUrl: './expert-in.page.html',
  styleUrls: ['./expert-in.page.scss'],
})
export class ExpertInPage implements OnInit {

  constructor() { }
  private experts = [
    {
      title: 'นายโอ  พ่อใหญ่สุด',
      grade: "A",
      status: 'true'
    },
    {
      title: 'นายแดง พ่อคุ้มกรม',
      grade: "B",
      status: 'false'
    },
    {
      title: 'นายแสง  โสมุดดิที',
      grade: "D",
      status: 'false'
    },
    {
      title: 'นางสาวเอ๋ 1000ไร่',
      grade: "F",
      status: 'true'
    },
    {
      title: 'นายเปรมชัย  สไนเปอร์',
      grade: "A",
      status: 'false'
    },
  ];
  ngOnInit() {
  }
  remove_expert_in(expert){
    let index = this.experts.indexOf(expert);
    if(index >=0){
      this.experts.splice(index,1);
    }
  }
}
