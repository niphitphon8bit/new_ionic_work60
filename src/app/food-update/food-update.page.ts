import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController, AlertController } from '@ionic/angular';
import { FoodTypeService } from '../service/food-type.service';

@Component({
  selector: 'app-food-update',
  templateUrl: './food-update.page.html',
  styleUrls: ['./food-update.page.scss'],
})
export class FoodUpdatePage implements OnInit {

  @Input() name_th: string;
  @Input() name_en: string;
  @Input() ft_id: string;
  constructor(
    private modalCtrl: ModalController,
    private foodTypeService: FoodTypeService,
    private alertController: AlertController) {}

  ngOnInit() {
  }

  update_food_type() {
    this.foodTypeService.update_food_type_data(this.ft_id,this.name_th,this.name_en).subscribe((res) => {
      if(res.affectedRows > 0){
        this.presentAlert("บันทึกสำเร็จ","รายการประเภทอาหารถูกแก้ไขเรียบร้อย")
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
