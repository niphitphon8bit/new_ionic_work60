import { NavParams, ModalController, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { PlaceService } from '../service/place.service';
@Component({
  selector: 'app-place-insert',
  templateUrl: './place-insert.page.html',
  styleUrls: ['./place-insert.page.scss'],
})
export class PlaceInsertPage implements OnInit {

  private name_th: string;
  private name_en: string;
  private status: string;

  constructor(
    private location: Location,
    private NavParams: NavParams,
    private modalCtrl: ModalController,
    private PlaceService: PlaceService,
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

  insert_place() {
    this.PlaceService.insert_place_data(this.name_th,this.name_en).subscribe((res) => {
      if(res.affectedRows > 0){
        this.presentAlert("บันทึกสำเร็จ","รายการสถานที่ถูกเพิ่มเรียบร้อย")
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
