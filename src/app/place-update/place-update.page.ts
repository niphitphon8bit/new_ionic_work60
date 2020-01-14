import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController, AlertController } from '@ionic/angular';
import { PlaceService } from '../service/place.service';

@Component({
  selector: 'app-place-update',
  templateUrl: './place-update.page.html',
  styleUrls: ['./place-update.page.scss'],
})
export class PlaceUpdatePage implements OnInit {

  @Input() name_th: string;
  @Input() name_en: string;
  @Input() place_id: string;
  constructor(
    private modalCtrl: ModalController,
    private PlaceService: PlaceService,
    private alertController: AlertController) {}

  ngOnInit() {
  }

  update_place() {
    this.PlaceService.update_place_data(this.place_id,this.name_th,this.name_en).subscribe((res) => {
      if(res.affectedRows > 0){
        this.presentAlert("บันทึกสำเร็จ","รายการสถานที่ถูกแก้ไขเรียบร้อย")
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

  closeModal() {
    this.modalCtrl.dismiss("close");
  }

}
