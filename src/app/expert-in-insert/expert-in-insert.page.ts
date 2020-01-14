import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-expert-in-insert',
  templateUrl: './expert-in-insert.page.html',
  styleUrls: ['./expert-in-insert.page.scss'],
})
export class ExpertInInsertPage implements OnInit {
<<<<<<< HEAD
  private name_th: string;
  private name_en: string;
  private status: string;
=======
  private ep_fname: string;
  private ep_lname: string;
  private ep_active: string;
>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b

  constructor(
    private location: Location,
    private NavParams: NavParams,
    private modalCtrl: ModalController
  ) {
<<<<<<< HEAD
    this.name_th = "";
    this.name_en = "";
    this.status = "true";
=======
    this.ep_fname = "";
    this.ep_lname = "";
    this.ep_active = "true";
>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b
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
<<<<<<< HEAD
      'name_th': this.name_th,
      'name_en': this.name_en,
      'status': this.status
=======
      'ep_fname': this.ep_fname,
      'ep_lname': this.ep_lname,
      'ep_active': this.ep_active
>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b
    })
  }

}
