<<<<<<< HEAD
import { NavParams, ModalController, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { DevelopService } from './../service/develop.service';

=======
import { NavParams, ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b
@Component({
  selector: 'app-develops-insert',
  templateUrl: './develops-insert.page.html',
  styleUrls: ['./develops-insert.page.scss'],
})
export class DevelopsInsertPage implements OnInit {

  private name_th: string;
  private name_en: string;
  private status: string;

  constructor(
    private location: Location,
    private NavParams: NavParams,
<<<<<<< HEAD
    private modalCtrl: ModalController,
    private DevelopService: DevelopService,
    private alertController: AlertController
=======
    private modalCtrl: ModalController
>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b
  ) {
    this.name_th = "";
    this.name_en = "";
    this.status = "true";
  }

  public closeModal() {
<<<<<<< HEAD
    this.modalCtrl.dismiss("close");
=======
    this.modalCtrl.dismiss({
      'dismissed': true
    });
>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b
  }

  ngOnInit() {
  }

  back() {
    this.location.back();
  }

<<<<<<< HEAD
  insert_develops() {
    this.DevelopService.insert_develops_data(this.name_th,this.name_en).subscribe((res) => {
      if(res.affectedRows > 0){
        this.presentAlert("บันทึกสำเร็จ","รายการประเภทอาหารถูกเพิ่มเรียบร้อย")
      }else{
        this.presentAlert("ไม่สามารถบันทึกข้อมูลได้","กรุณาติดต่อผู้ดูแลระบบ")
      }
    })
    
  }

  async presentAlert(title:string,description:string) {
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
=======
  insert_develop() {
    this.modalCtrl.dismiss({
      'dismissed': true,
      'name_th': this.name_th,
      'name_en': this.name_en,
      'status': this.status
    })
  }

>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b

}
