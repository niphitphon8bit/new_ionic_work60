import { NavParams, ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-expert-type-insert',
  templateUrl: './expert-type-insert.page.html',
  styleUrls: ['./expert-type-insert.page.scss'],
})
export class ExpertTypeInsertPage implements OnInit {

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

  back(){
    this.location.back();
  }

  insert_expert_type() {
    this.modalCtrl.dismiss({
      'dismissed': true,
      'name_th': this.name_th,
      'name_en': this.name_en,
      'status': this.status
    })
  }
}
