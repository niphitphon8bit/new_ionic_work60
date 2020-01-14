import {ExpertTypeInsertPage} from './../expert-type-insert/expert-type-insert.page';
import { ModalController, AlertController  } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ExpertTypeService } from '../service/expert-type.service';
import { ExpertTypeUpdatePage } from '../expert-type-update/expert-type-update.page'

@Component({
  selector: 'app-expert-type',
  templateUrl: './expert-type.page.html',
  styleUrls: ['./expert-type.page.scss'],
})
export class ExpertTypePage implements OnInit {
 
  public expert_types:any = [];

  constructor(
    private expertTypeService: ExpertTypeService,
    private modalController: ModalController,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.get_all_expert_type();
  }

  get_all_expert_type() {
    this.expert_types = []
    this.expertTypeService.get_all_expert_type_data().subscribe((res) => {
      res.forEach(element => {
        this.expert_types.push({
          ept_id : element.ept_id,
          ept_name_th: element.ept_name_th,
          ept_name_en: element.ept_name_en,
          ept_status: (element.ept_status == "Y" ? true : false)
         })
      });
    })
  }

  async insert_expert_type(){
    const modal = await this.modalController.create({
      component: ExpertTypeInsertPage
    });

    modal.onDidDismiss().then((status) => {
      if(status != null){
        this.get_all_expert_type()
      }
    });
    return await modal.present()
  }

  async remove_expert_type(expert_type){
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
            this.expertTypeService.delete_expert_type_data(expert_type.ept_id).subscribe((res) => {
              if(res.affectedRows > 0){
                this.get_all_expert_type()
              }
            })
           }
        }
      ]
    });

      await alert.present();
    }

  async change_status_expert_type(expert_type){
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
            this.expertTypeService.update_expert_type_status(expert_type.ept_id,expert_type.ept_status).subscribe((res) => {
              if(res.affectedRows > 0){
                this.get_all_expert_type()
              }
            })
           }
        }
      ]
    });
  
      await alert.present();
    }

  async edit_expert_type(expert_tpye){
    const modal = await this.modalController.create({
      component: ExpertTypeUpdatePage,
      componentProps: {
        'name_th': expert_tpye.ept_name_th,
        'name_en': expert_tpye.ept_name_en,
        'ept_id': expert_tpye.ept_id
      }
    });
  
    modal.onDidDismiss().then((status) => {
      if(status != null){
        this.get_all_expert_type()
       }
    });
    return await modal.present()
  }
}
