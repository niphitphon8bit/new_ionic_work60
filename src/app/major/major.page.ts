import { MajorInsertPage } from './../major-insert/major-insert.page';
import { MajorService } from './../service/major.service';
import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { MajorUpdatePage } from '../major-update/major-update.page';

@Component({
  selector: 'app-major',
  templateUrl: './major.page.html',
  styleUrls: ['./major.page.scss'],
})
export class MajorPage implements OnInit {
  
  public majors:any = [];

  constructor(
    private MajorService: MajorService,
    private modalController: ModalController,
    private alertController: AlertController

  ) { }

  ngOnInit() {
    this.get_all_major();
  }


  get_all_major() {
    this.majors = []
    this.MajorService.get_all_major_data().subscribe((res) => {
      res.forEach(element =>{
      this.majors.push({
        mj_id : element.mj_id,
        mj_name_th : element.mj_name_th,
        mj_name_en : element.mj_name_en,
        mj_status : (element.mj_status == "Y" ? true :false)
      })
      });
    })
  }

  async insert_major() {
    const modal = await this.modalController.create({
      component: MajorInsertPage
    })

    modal.onDidDismiss().then((status) => {
      if(status != null){
        this.get_all_major()
      }
    });
    return await modal.present()
  }
  /*
   * set_major_status
   * set_major_status from database y to true n to false by add new data 
   * create Artit  14/01/2563
   */

  async remove_majors(major){
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
            this.MajorService.delete_major_data(major.mj_id).subscribe((res) => {
              if(res.affectedRows > 0){
                this.get_all_major()
              }
            })
          }
        }
      ]
    });
    await alert.present();
  }
  async change_status_major(major){
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
            this.MajorService.update_major_status(major.mj_id,major.mj_status).subscribe((res) => {
              if(res.affectedRows > 0){
                this.get_all_major()
              }
            })
          }
        }
      ]
    });
    await alert.present();
  }

  async edit_major(major){
    const modal = await this.modalController.create({
      component: MajorUpdatePage,
      componentProps: {
        'name_th': major.mj_name_th,
        'name_en': major.mj_name_en,
        'mj_id': major.mj_id
      }
    });

    modal.onDidDismiss().then((status) => {
      if(status != null){
        this.get_all_major()
      }
    });
    return await modal.present()
  }


}
