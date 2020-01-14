import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController, AlertController } from '@ionic/angular';
import { BankService } from '../service/bank.service';
import { BankInsertService } from '../service/bank-insert.service'
@Component({
  selector: 'app-bank-update',
  templateUrl: './bank-update.page.html',
  styleUrls: ['./bank-update.page.scss'],
})
export class BankUpdatePage implements OnInit {
  name;
  @Input() balance_name: string;
  // @Input() name: string;
  @Input() ba_id: string;
  @Input() text: string;
  constructor(

    private modalCtrl: ModalController,
    private BankService: BankService,
    private BankInsertService: BankInsertService,
    private alertController: AlertController) {
    // console.log(this.balance_name, this.name, this.ba_id, this.text)

  }

  public db_bank_bases: any = null;

  ngOnInit() {
    this.get_all_bank_base()
  }

  update_bank() {
    console.log(this.balance_name, this.name, this.ba_id, this.text)
    this.BankService.update_bank(this.ba_id, this.balance_name, this.name, this.text).subscribe((res) => {
      if (res.affectedRows > 0) {
        this.presentAlert("บันทึกสำเร็จ", "รายการประเภทอาหารถูกเพิ่มเรียบร้อย")
        this.get_all_bank_base()
      } else {
        this.presentAlert("ไม่สามารถบันทึกข้อมูลได้", "กรุณาติดต่อผู้ดูแลระบบ")
      }
    })

  }

  get_all_bank_base() {
    this.BankInsertService.get_all_bank_base_data().subscribe((res) => {
      this.db_bank_bases = res;
      console.log(this.db_bank_bases);
      // this.set_bank_status();
    })
  }

  async presentAlert(title: string, description: string) {
    const alert = await this.alertController.create({
      header: title,
      message: description,
      buttons: [
        {
          text: 'ตกลง',
          handler: (event) => {
            this.closeModal()
          }
        }
      ]
    });

    await alert.present();
  }

  closeModal() {
    this.modalCtrl.dismiss("close");
  }


}
