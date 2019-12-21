import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-expert-type-insert',
  templateUrl: './expert-type-insert.page.html',
  styleUrls: ['./expert-type-insert.page.scss'],
})
export class ExpertTypeInsertPage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }
  insert_expert_type(){
    this.location.back();
  }
  
 


}
