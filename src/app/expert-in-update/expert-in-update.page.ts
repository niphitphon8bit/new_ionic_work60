import { Component, OnInit,Input } from '@angular/core';
import { NavParams, ModalController, AlertController } from '@ionic/angular';
import {ExpertInService} from '../service/expert-in.service'


@Component({
  selector: 'app-expert-in-update',
  templateUrl: './expert-in-update.page.html',
  styleUrls: ['./expert-in-update.page.scss'],
})
export class ExpertInUpdatePage implements OnInit {
  @Input() ep_id: string;
  @Input() ep_fname: string;
  @Input() ep_lname: string;
  constructor(
    private modalCtrl: ModalController,
    private expertInService: ExpertInService,
    private alertController: AlertController) {}

  ngOnInit() {
  }

  update_expert_in() {
    this.expertInService.update_expert_in_data(this.ep_id,this.ep_fname,this.ep_lname).subscribe((res) => {
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
  closeModal() {
    this.modalCtrl.dismiss("close");
  }
}
