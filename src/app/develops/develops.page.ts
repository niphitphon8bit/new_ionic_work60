import { DevelopsInsertPage } from './../develops-insert/develops-insert.page';
import { DevelopService } from './../service/develop.service';
import { ModalController, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { DevelopsUpdatePage } from '../develops-update/develops-update.page';


@Component({
  selector: 'app-develops',
  templateUrl: './develops.page.html',
  styleUrls: ['./develops.page.scss'],
})
export class DevelopsPage implements OnInit {

  public develops :any = [];

  constructor(
    private DevelopService: DevelopService,
    private modalController: ModalController,
    private alertController: AlertController
  ) {

  }

  ngOnInit() {
    this.get_all_develops();
  }

  get_all_develops() {
    this.develops = []
    this.DevelopService.get_all_develops_data().subscribe((res) => {
      res.forEach(element => {
        this.develops.push({
          dev_id : element.dev_id,
          dev_name_th: element.dev_name_th,
          dev_name_en: element.dev_name_en,
          dev_status: (element.dev_status == "Y" ? true : false)
        })
      });
    })
  }

  async insert_develops(){
    const modal = await this.modalController.create({
      component: DevelopsInsertPage
    });

    modal.onDidDismiss().then((status) => {
      if(status != null){
        this.get_all_develops()
      }
    });
    return await modal.present()
  }

  async remove_develops(develops){
    const alert = await this.alertController.create({
      header: "ยืนยันการลบรายการ",
      message: "ต้องการลบรายการนี้หรือไม่ ?",
      buttons: [
        {
          text: 'ยกเลิก',
          handler: (event) => {
            
          }
        },
        {
          text: 'ตกลง',
          handler: (event) => {
            this.DevelopService.delete_develops_data(develops.dev_id).subscribe((res) => {
              if(res.affectedRows > 0){
                this.get_all_develops()
              }
            })
          }
        }
      ]
    });

    await alert.present();
  }

  async change_status_develops(develops){
    const alert = await this.alertController.create({
      header: "ยืนยันการปรับสถานะรายการ",
      message: "ต้องการปรับสถานะรายการนี้หรือไม่ ?",
      buttons: [
        {
          text: 'ยกเลิก',
          handler: (event) => {
            
          }
        },
        {
          text: 'ตกลง',
          handler: (event) => {
            this.DevelopService.update_develops_status(develops.dev_id,develops.dev_status).subscribe((res) => {
              if(res.affectedRows > 0){
                this.get_all_develops()
              }
            })
          }
        }
      ]
    });

    await alert.present();
  }

  async edit_develops(develops){
    const modal = await this.modalController.create({
      component: DevelopsUpdatePage,
      componentProps: {
        'name_th': develops.dev_name_th,
        'name_en': develops.dev_name_en,
        'dev_id': develops.dev_id
      }
    });

    modal.onDidDismiss().then((status) => {
      if(status != null){
        this.get_all_develops()
      }
    });
    return await modal.present()
  }
}
