<<<<<<< HEAD
import { NavParams, ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
=======
import { NavParams, ModalController, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MajorService } from '../service/major.service';

>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b
@Component({
  selector: 'app-major-insert',
  templateUrl: './major-insert.page.html',
  styleUrls: ['./major-insert.page.scss'],
})
export class MajorInsertPage implements OnInit {

  private name_th: string;
  private name_en: string;
<<<<<<< HEAD
  private dev_name: string;
=======
>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b
  private status: string;

  constructor(
    private location: Location,
    private NavParams: NavParams,
<<<<<<< HEAD
    private modalCtrl: ModalController
  ) {
    this.name_th = "";
    this.name_en = "";
    this.dev_name = "";
=======
    private modalCtrl: ModalController,
    private MajorService: MajorService,
    private alertController: AlertController
  ) {
    this.name_th = "";
    this.name_en = "";
>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b
    this.status = "true";
  }

  public closeModal() {
<<<<<<< HEAD
    this.modalCtrl.dismiss({
      'dismissed': true
    });
=======
    this.modalCtrl.dismiss("close");
>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b
  }

  ngOnInit() {
  }

  back() {
    this.location.back();
  }

  insert_major() {
<<<<<<< HEAD
    this.modalCtrl.dismiss({
      'dismissed': true,
      'name_th': this.name_th,
      'name_en': this.name_en,
      'dev_name': this.dev_name,
      'status': this.status
    })
  }
=======
  this.MajorService.insert_major_data(this.name_th,this.name_en).subscribe((res) => {
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




>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b

}

