import { NavParams, ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-major-insert',
  templateUrl: './major-insert.page.html',
  styleUrls: ['./major-insert.page.scss'],
})
export class MajorInsertPage implements OnInit {

  private name_th: string;
  private name_en: string;
  private dev_name: string;
  private status: string;

  constructor(
    private location: Location,
    private NavParams: NavParams,
    private modalCtrl: ModalController
  ) {
    this.name_th = "";
    this.name_en = "";
    this.dev_name = "";
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

  insert_major() {
    this.modalCtrl.dismiss({
      'dismissed': true,
      'name_th': this.name_th,
      'name_en': this.name_en,
      'dev_name': this.dev_name,
      'status': this.status
    })
  }

}

