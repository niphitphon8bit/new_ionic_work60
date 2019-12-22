import { NavParams, ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-expert-type-insert',
  templateUrl: './expert-type-insert.page.html',
  styleUrls: ['./expert-type-insert.page.scss'],
})
export class ExpertTypeInsertPage implements OnInit {

  private  title: string;
  private status: string;

  constructor(
    private location: Location,
    private NavParams: NavParams,
    private modalCtrl: ModalController
    ) { 
      this.title = "";
      this.status= "true";
    }

    public closeModal(){
      this.modalCtrl.dismiss({
        'dismissed': true
      });
    }
  
  ngOnInit() {
  }
  insert_expert_type(){
    this.location.back();
  }
  
 


}
