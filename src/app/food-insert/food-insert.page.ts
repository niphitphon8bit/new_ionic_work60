import { NavParams, ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
@Component({
  selector: 'app-food-insert',
  templateUrl: './food-insert.page.html',
  styleUrls: ['./food-insert.page.scss'],
})
export class FoodInsertPage implements OnInit {

  private name_th: string;
  private name_en: string;
  private status: string;

  constructor(
    private location: Location,
    private NavParams: NavParams,
    private modalCtrl: ModalController
  ) {
    this.name_th = "";
    this.name_en = "";
    this.status = "true";
  }

  public closeModal() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });


  }

  ngOnInit() {
  }


  back() {
    this.location.back();
  }

  insert_food_type() {
    // console.log
    this, this.modalCtrl.dismiss({
      'dismissed': true,
      'name_th': this.name_th,
      'name_en': this.name_en,
      'status': this.status
    })
  }

}
