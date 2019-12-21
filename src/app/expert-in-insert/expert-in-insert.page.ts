import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expert-in-insert',
  templateUrl: './expert-in-insert.page.html',
  styleUrls: ['./expert-in-insert.page.scss'],
})
export class ExpertInInsertPage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }
  insert_expert_in(){
  
    this.location.back();
  }

}
