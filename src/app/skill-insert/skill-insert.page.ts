import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-skill-insert',
  templateUrl: './skill-insert.page.html',
  styleUrls: ['./skill-insert.page.scss'],
})
export class SkillInsertPage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  
  insert_skill(){
  
    this.location.back();
  }

}

