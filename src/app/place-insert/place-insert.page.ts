<<<<<<< HEAD
import { NavParams, ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
=======
import { NavParams, ModalController, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { PlaceService } from '../service/place.service';
>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b
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
<<<<<<< HEAD
    private modalCtrl: ModalController
  ) {

=======
    private modalCtrl: ModalController,
    private PlaceService: PlaceService,
    private alertController: AlertController
  ) {
>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b
    this.name_th = "";
    this.name_en = "";
    this.status = "true";
  }

<<<<<<< HEAD

  public closeModal() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
=======
  public closeModal() {
    this.modalCtrl.dismiss("close");
>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b
  }

  ngOnInit() {
  }

<<<<<<< HEAD
  back(){
    this.location.back();
  }
  insert_place() {
    this.modalCtrl.dismiss({
      'dismissed': true,
      'name_th': this.name_th,
      'name_en': this.name_en,
      'status': this.status
    })
  }

=======
  back() {
    this.location.back();
  }

  insert_place() {
    this.PlaceService.insert_place_data(this.name_th,this.name_en).subscribe((res) => {
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
