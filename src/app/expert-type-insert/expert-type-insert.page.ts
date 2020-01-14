<<<<<<< HEAD
import { NavParams, ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
=======
import { NavParams, ModalController, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ExpertTypeService } from '../service/expert-type.service';


>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b
@Component({
  selector: 'app-expert-type-insert',
  templateUrl: './expert-type-insert.page.html',
  styleUrls: ['./expert-type-insert.page.scss'],
})
export class ExpertTypeInsertPage implements OnInit {

  private name_th: string;
  private name_en: string;
  private status: string;

  constructor(
    private location: Location,
    private NavParams: NavParams,
<<<<<<< HEAD
    private modalCtrl: ModalController
=======
    private modalCtrl: ModalController,
    private expertTypeService: ExpertTypeService,
    private alertController: AlertController

>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b
  ) {
    this.name_th = "";
    this.name_en = "";
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

  back(){
    this.location.back();
  }

  insert_expert_type() {
<<<<<<< HEAD
    this.modalCtrl.dismiss({
      'dismissed': true,
      'name_th': this.name_th,
      'name_en': this.name_en,
      'status': this.status
    })
  }
}
=======
    this.expertTypeService.insert_expert_type_data(this.name_th,this.name_en).subscribe((res) => {
      if(res.affectedRows > 0){
        this.presentAlert("บันทึกสำเร็จ","รายการประเภทวิทยากรเพิ่มเรียบร้อย")
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

}


>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b
