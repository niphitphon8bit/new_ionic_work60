import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController, AlertController } from '@ionic/angular';
import { MajorService } from '../service/major.service';

@Component({
  selector: 'app-major-update',
  templateUrl: './major-update.page.html',
  styleUrls: ['./major-update.page.scss'],
})
export class MajorUpdatePage implements OnInit {

  @Input() name_th: string;
  @Input() name_en: string;
  @Input() mj_id: string;


  constructor(
    private modalCtrl: ModalController,
    private MajorService: MajorService,
    private alertController: AlertController) {}
  

  ngOnInit() {
  }

  update_major() {
    this.MajorService.update_major_data(this.mj_id,this.name_th,this.name_en).subscribe((res) => {
      if(res.affectedRows > 0){
        this.presentAlert("บันทึกสำเร็จ","รายการสาขาวิชาถูกแก้ไขเรียบร้อย")
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
