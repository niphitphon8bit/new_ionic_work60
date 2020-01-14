import { BankInsertPage } from './../bank-insert/bank-insert.page';
import { ModalController } from '@ionic/angular';
import { BankService } from './../service/bank.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.page.html',
  styleUrls: ['./bank.page.scss'],
})

export class BankPage implements OnInit {

  constructor(
    private BankService: BankService,
    private modalController: ModalController
  ) {

  }

  async insert_bank_modal() {
    const modal = await this.modalController.create({
      component: BankInsertPage
    })

    modal.onDidDismiss()
      .then((bank) => {
        if(bank.data.status){
          var insert_bank = {
            balance_name: bank.data.balance_name,
            name: bank.data.name,
            text: bank.data.text,
            status: bank.data.status == "true"  ? "Y": "N"
          };
          this.BankService.bank_insert(insert_bank);
          console.log(bank.data.status);
          this.banks.push(insert_bank);  
        }
      })
    return await modal.present();
  }
  // db_bank query from database
  public db_banks: any = null;

  // banks data mock-up
  private banks = [
    {
      balance_name: "บัญชีฝาก",
      name: 'Kasikorn',
      text: '',
      status: 'true',
    },
    {
      balance_name: "บัญชีถอน",
      name: 'Thai Army',
      text: '',
      status: 'true',
    },
    {
      balance_name: "บัญชีฝาก",
      name: 'Krungthai',
      text: '',
      status: 'false',
    },
    {
      balance_name: 'บัญชีถอน',
      name: 'Bangkok Bank',
      text: '',
      status: 'false',
    }
  ];



  ngOnInit() {
    this.get_all_bank();
  }

  /*
  * set_bank_status
  * set_bank_status from database y to true n to false by add new data 
  * create Niphitphon 12/22/2562
  */
  set_bank_status() {
    for (let key in this.db_banks) {
      let value = this.db_banks[key]
      if (this.db_banks[key].ba_status == "Y") {
        this.db_banks[key].status = true;
      } else {
        this.db_banks[key].status = false;
      }
    }
  }

  // get all bank from database
  get_all_bank() {
    this.BankService.get_all_bank_data().subscribe((res) => {
      this.db_banks = res;
      console.log(this.db_banks);
      this.set_bank_status();
    })

  }

  // change bank status , ba_status
  change(bank) {
    let index = this.db_banks.indexOf(bank);
    if (this.db_banks[index].ba_status == "Y") {
      this.db_banks[index].ba_status = "N"
    } else {
      this.db_banks[index].ba_status = "Y"
    }
  }

   // remove_bank on index 
   remove_db_bank(bank) {
    let index = this.db_banks.indexOf(bank);
    console.log(bank.ba_id);
    if (index > -1) {
      this.db_banks.splice(index, 1);
    }
    this.BankService.bank_delete(bank.ba_id);
  }

  // remove_bank on index 
  remove_bank(bank) {
    let index = this.banks.indexOf(bank);
    if (index > -1) {
      this.banks.splice(index, 1);
    }
  }

}
