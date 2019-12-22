import { NavParams, ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
@Component({
  selector: 'app-bank-insert',
  templateUrl: './bank-insert.page.html',
  styleUrls: ['./bank-insert.page.scss'],
})
export class BankInsertPage implements OnInit {

  private name: string;
  private balance_name: string;
  private text: string;
  private status: string;

  constructor(
    private location: Location,
    private NavParams: NavParams,
    private modalCtrl: ModalController
  ) {
    this.balance_name = "";
    this.name = "";
    this.text = "";
    this.status = "true";
  }

  public closeModal(){
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  ngOnInit() {
  }

  back(){
    this.location.back();
  }

  insert_bank() {
    // console.log
    this, this.modalCtrl.dismiss({
      'dismissed': true,
      'balance_name': this.balance_name,
      'name': this.name,
      'status': this.status,
      'text': this.text,
    })
  }

}
