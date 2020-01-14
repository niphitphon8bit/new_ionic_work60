import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-expert-in-insert',
  templateUrl: './expert-in-insert.page.html',
  styleUrls: ['./expert-in-insert.page.scss'],
})
export class ExpertInInsertPage implements OnInit {
  private ep_fname: string;
  private ep_lname: string;
  private ep_active: string;

  constructor(
    private location: Location,
    private NavParams: NavParams,
    private modalCtrl: ModalController
  ) {
    this.ep_fname = "";
    this.ep_lname = "";
    this.ep_active = "true";
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
      'ep_fname': this.ep_fname,
      'ep_lname': this.ep_lname,
      'ep_active': this.ep_active
    })
  }

}
