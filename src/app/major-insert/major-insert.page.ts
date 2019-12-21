import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
// import('loadChildren').then(m => m.MODULE).
@Component({
  selector: 'app-major-insert',
  templateUrl: './major-insert.page.html',
  styleUrls: ['./major-insert.page.scss'],
})
export class MajorInsertPage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }
  major_insert(){
    this.location.back();
    // loadChildren: () => import('./major/major.module').then(m => m.MajorPageModule)
  }
}

