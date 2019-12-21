import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-major',
  templateUrl: './major.page.html',
  styleUrls: ['./major.page.scss'],
})
export class MajorPage implements OnInit {

  constructor() { }
  private data_major = [
    {
      title: 'สาขาวิชา',
      grade: "A",
      status: 'true'
    },
    {
      title: 'สาขาวิชาวิศวกรรมซอฟต์แวร์',
      grade: "B",
      status: 'false'
    },
    {
      title: 'สาขาคอมพิวเตอร์ธุรกิจ',
      grade: "D",
      status: 'false'
    },
   
  ];
  // post = { title: '', body: ''};
  // data: any;
  ngOnInit() {
  }
  remove_major(index_major){
    let index = this.data_major.indexOf(index_major);
    if(index > -1){
      this.data_major.splice(index,1);
    }
  }
}
