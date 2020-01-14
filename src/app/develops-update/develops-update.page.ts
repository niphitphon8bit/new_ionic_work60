import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController, AlertController } from '@ionic/angular';
import { DevelopService } from '../service/develop.service';


@Component({
  selector: 'app-develops-update',
  templateUrl: './develops-update.page.html',
  styleUrls: ['./develops-update.page.scss'],
})
export class DevelopsUpdatePage implements OnInit {

  @Input() name_th: string;
  @Input() name_en: string;
  @Input() dev_id: string;
  constructor(
    private modalCtrl: ModalController,
    private DevelopService: DevelopService,
    private alertController: AlertController) {}

  ngOnInit() {
  }

  update_develops() {
    this.DevelopService.update_develops_data(this.dev_id,this.name_th,this.name_en).subscribe((res) => {
      if(res.affectedRows > 0){
        this.presentAlert("บันทึกสำเร็จ","รายการด้านการพัฒนาถูกแก้ไขเรียบร้อย")
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
