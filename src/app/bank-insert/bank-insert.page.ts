import { NavParams, ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { BankInsertService } from './../service/bank-insert.service';

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
    private modalCtrl: ModalController,
<<<<<<< HEAD
    private BankInsertPage: BankInsertService
=======
    private BankInsertService: BankInsertService
>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b
  ) {
    this.balance_name = "";
    this.name = "";
    this.text = "";
    this.status = "true";
  }

  public db_bank_bases: any = null;

  public closeModal() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  ngOnInit() {
    this.get_all_bank_base();
  }

  back() {
    this.location.back();
  }

  get_all_bank_base() {
<<<<<<< HEAD
    this.BankInsertPage.get_all_bank_base_data().subscribe((res) => {
=======
    this.BankInsertService.get_all_bank_base_data().subscribe((res) => {
>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b
      this.db_bank_bases = res;
      console.log(this.db_bank_bases);
      // this.set_bank_status();
    })
  }


  insert_bank() {
    this.modalCtrl.dismiss({
      'dismissed': true,
      'balance_name': this.balance_name,
      'name': this.name,
      'status': this.status,
      'text': this.text,
    })
  }

}
