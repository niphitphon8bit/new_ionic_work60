import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { ExpertOutService } from './../service/expert-out.service';
import { ModalController, AlertController } from '@ionic/angular';
import { ExpertOutUpdatePage } from '../expert-out-update/expert-out-update.page';
import { ExpertOutInsertPage } from './../expert-out-insert/expert-out-insert.page';
>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b

@Component({
  selector: 'app-expert-out',
  templateUrl: './expert-out.page.html',
  styleUrls: ['./expert-out.page.scss'],
})
export class ExpertOutPage implements OnInit {

<<<<<<< HEAD
  constructor() { }

  ngOnInit() {
=======
  public expert_out: any = [];

  constructor(
    private ExpertOutService: ExpertOutService,
    private modalController: ModalController,
    private alertController: AlertController
    ) {

  }

  ngOnInit() {
    this.get_all_expert_out();
  }

  async insert_expert_out(){
    const modal = await this.modalController.create({
      component: ExpertOutInsertPage
    });

    modal.onDidDismiss().then((status) => {
      if(status != null){
        this.get_all_expert_out()
      }
    });
    return await modal.present()
  }
  get_all_expert_out() {
    this.expert_out = []
    this.ExpertOutService.get_all_expert_out_data().subscribe((res) => {
      res.forEach(element => {
        this.expert_out.push({
          ep_id : element.ep_id,
          ep_fname : element.ep_fname,
          ep_lname : element.ep_lname,
          ep_active: (element.ep_active == "Y" ? true : false)
        })
      });
    })
  }
  

  async change_status_expert_out(expert_out){
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
            this.ExpertOutService.update_expert_out_status(expert_out.ep_id,expert_out.ep_active).subscribe((res) => {
              if(res.affectedRows > 0){
                this.get_all_expert_out()
              }
            })
          }
        }
      ]
    });

    await alert.present();
  }

  async edit_expert_out(expert_out){
    const modal = await this.modalController.create({
      component: ExpertOutUpdatePage,
      componentProps: {
        'ep_fname': expert_out.ep_fname,
        'ep_lname': expert_out.ep_lname,
        'ep_id': expert_out.ep_id
      }
    });

    modal.onDidDismiss().then((status) => {
      if(status != null){
        this.get_all_expert_out()
      }
    });
    return await modal.present()
  }

  async remove_expert_out(expert_out){
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
            this.ExpertOutService.delete_expert_out_data(expert_out.ep_id).subscribe((res) => {
              if(res.affectedRows > 0){
                this.get_all_expert_out()
              }
            })
          }
        }
      ]
    });

    await alert.present();
>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b
  }

}
