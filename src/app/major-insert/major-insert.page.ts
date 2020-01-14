import { NavParams, ModalController, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MajorService } from '../service/major.service';

@Component({
  selector: 'app-major-insert',
  templateUrl: './major-insert.page.html',
  styleUrls: ['./major-insert.page.scss'],
})
export class MajorInsertPage implements OnInit {

  private name_th: string;
  private name_en: string;
  private status: string;

  constructor(
    private location: Location,
    private NavParams: NavParams,
    private modalCtrl: ModalController,
    private MajorService: MajorService,
    private alertController: AlertController
  ) {
    this.name_th = "";
    this.name_en = "";
    this.status = "true";
  }

  public closeModal() {
    this.modalCtrl.dismiss("close");
  }

  ngOnInit() {
  }

  back() {
    this.location.back();
  }

  insert_major() {
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





}

