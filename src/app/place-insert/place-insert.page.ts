import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-place-insert',
  templateUrl: './place-insert.page.html',
  styleUrls: ['./place-insert.page.scss'],
})
export class PlaceInsertPage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }
  insert_place(){
    this.location.back();
    
  }

}
