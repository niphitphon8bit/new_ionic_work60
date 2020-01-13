import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-expert-in-insert',
  templateUrl: './expert-in-insert.page.html',
  styleUrls: ['./expert-in-insert.page.scss'],
})
export class ExpertInInsertPage implements OnInit {
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

  insert_expert_in() {
    this.modalCtrl.dismiss({
      'dismissed': true,
      'name_th': this.name_th,
      'name_en': this.name_en,
      'status': this.status
    })
  }

}
