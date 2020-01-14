import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController, AlertController } from '@ionic/angular';
import { ExpertTypeService } from '../service/expert-type.service';

@Component({
  selector: 'app-expert-type-update',
  templateUrl: './expert-type-update.page.html',
  styleUrls: ['./expert-type-update.page.scss'],
})
export class ExpertTypeUpdatePage implements OnInit {

  @Input() name_th: string;
  @Input() name_en: string;
  @Input() ept_id: string;

  constructor(
    private modalCtrl: ModalController,
    private expertTypeService: ExpertTypeService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  update_expert_type() {
    this.expertTypeService. update_expert_type_data(this.ept_id,this.name_th,this.name_en).subscribe((res) => {
      if(res.affectedRows > 0){
        this.presentAlert("บันทึกสำเร็จ","รายการประเภทวิทยากรถูกเพิ่มเรียบร้อย")
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
