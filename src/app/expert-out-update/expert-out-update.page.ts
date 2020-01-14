import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController, AlertController } from '@ionic/angular';
import { ExpertOutService } from './../service/expert-out.service';

@Component({
  selector: 'app-expert-out-update',
  templateUrl: './expert-out-update.page.html',
  styleUrls: ['./expert-out-update.page.scss'],
})
export class ExpertOutUpdatePage implements OnInit {

  @Input() ep_fname: string;
  @Input() ep_lname: string;
  @Input() ep_id: string;

  constructor(
    private modalCtrl: ModalController,
    private ExpertOutService: ExpertOutService,
    private alertController: AlertController
    ) { }

  ngOnInit() {
  }
  update_expert_out() {
    this.ExpertOutService.update_expert_out_data(this.ep_id,this.ep_fname,this.ep_lname).subscribe((res) => {
      if(res.affectedRows > 0){
        this.presentAlert("บันทึกสำเร็จ","รายชื่อวิทยากรภายนอกแก้ไขเรียบร้อย")
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
