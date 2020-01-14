import { BankInsertPage } from './../bank-insert/bank-insert.page';
<<<<<<< HEAD
import { ModalController } from '@ionic/angular';
import { BankService } from './../service/bank.service';
import { Component, OnInit } from '@angular/core';
=======
import { ModalController, AlertController } from '@ionic/angular';
import { BankService } from './../service/bank.service';
import { Component, OnInit } from '@angular/core';
import { BankUpdatePage } from '../bank-update/bank-update.page';
>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b

@Component({
  selector: 'app-bank',
  templateUrl: './bank.page.html',
  styleUrls: ['./bank.page.scss'],
})

export class BankPage implements OnInit {

  constructor(
    private BankService: BankService,
<<<<<<< HEAD
    private modalController: ModalController
  ) {

  }
=======
    private modalController: ModalController,
    private alertController: AlertController
  ) { }

>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b

  async insert_bank_modal() {
    const modal = await this.modalController.create({
      component: BankInsertPage
    })

    modal.onDidDismiss()
      .then((bank) => {
<<<<<<< HEAD
        if(bank.data.status){
=======
        if (bank.data.status) {
>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b
          var insert_bank = {
            balance_name: bank.data.balance_name,
            name: bank.data.name,
            text: bank.data.text,
<<<<<<< HEAD
            status: bank.data.status == "true"  ? "Y": "N"
          };
          this.BankService.bank_insert(insert_bank);
          console.log(bank.data.status);
          this.banks.push(insert_bank);  
=======
            status: bank.data.status == "true" ? "Y" : "N"
          };
          this.BankService.bank_insert(insert_bank);
          console.log(bank.data.status);
          this.get_all_bank()
>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b
        }
      })
    return await modal.present();
  }
  // db_bank query from database
<<<<<<< HEAD
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


=======
  public db_banks: any = [];
>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b

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
<<<<<<< HEAD
    this.BankService.get_all_bank_data().subscribe((res) => {
      this.db_banks = res;
      console.log(this.db_banks);
      this.set_bank_status();
=======
    this.db_banks = []
    this.BankService.get_all_bank_data().subscribe((res) => {
      res.forEach(element => {
        this.db_banks.push({
          ba_id: element.ba_id,
          ba_balance_name: element.ba_balance_name,
          ba_bb_id: element.ba_bb_id,
          ba_status: (element.ba_status == "Y" ? true : false),
          ba_text: element.ba_text
        })
      })
      console.log(this.db_banks);
      // this.set_bank_status();
>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b
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

<<<<<<< HEAD
   // remove_bank on index 
   remove_db_bank(bank) {
=======
  // remove_bank on index 
  remove_db_bank(bank) {
>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b
    let index = this.db_banks.indexOf(bank);
    console.log(bank.ba_id);
    if (index > -1) {
      this.db_banks.splice(index, 1);
    }
    this.BankService.bank_delete(bank.ba_id);
  }

<<<<<<< HEAD
  // remove_bank on index 
  remove_bank(bank) {
    let index = this.banks.indexOf(bank);
    if (index > -1) {
      this.banks.splice(index, 1);
    }
=======



  async edit_bank(bank) {
    console.log(bank)
    const modal = await this.modalController.create({
      component: BankUpdatePage,
      componentProps: {
        'dismissed': true,
        'balance_name': bank.ba_balance_name,
        'name': bank.ba_bb_id,
        'status': bank.ba_status,
        'text': bank.ba_text,
        'ba_id': bank.ba_id
      }
    });

    modal.onDidDismiss().then((status) => {
        this.get_all_bank()
    });
    return await modal.present()
  }

  async change_status_bank(bank) {
    const alert = await this.alertController.create({
      header: "ยืนยันการปรับสถานะรายการ",
      message: "ต้องการปรับสถานะรายการนี้หรือไม่ ?",
      buttons: [
        {
          text: 'ยกเลิก',
          handler: (event) => {

          }
        },
        {
          text: 'ตกลง',
          handler: (event) => {
            this.BankService.update_bank_status(bank.ba_id, bank.ba_status).subscribe((res) => {
              if (res.affectedRows > 0) {
                this.get_all_bank()
              }
            })
          }
        }
      ]
    });

    await alert.present();
>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b
  }

}
