import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-bank-insert',
  templateUrl: './bank-insert.page.html',
  styleUrls: ['./bank-insert.page.scss'],
})
export class BankInsertPage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  insert_bank(){
  
    this.location.back();
  }

}
