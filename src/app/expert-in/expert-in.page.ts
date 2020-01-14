import { Component, OnInit } from '@angular/core';
import { ModalController,AlertController } from '@ionic/angular';
import { ExpertInInsertPage } from './../expert-in-insert/expert-in-insert.page';
import { ExpertInService } from './../service/expert-in.service';
import {ExpertInUpdatePage} from '../expert-in-update/expert-in-update.page'





@Component({
  selector: 'app-expert-in',
  templateUrl: './expert-in.page.html',
  styleUrls: ['./expert-in.page.scss'],
})
export class ExpertInPage implements OnInit {

  constructor(
    private ExpertInService: ExpertInService,
    private modalController: ModalController,
    private alertController: AlertController

  ) { }

  async insert_expert_modal() {
    const modal = await this.modalController.create({
      component: ExpertInInsertPage
    })

    modal.onDidDismiss()
      .then((expert) => {
        if (expert.data.ep_active) {
          var insert_expert_in = {
            ep_fname: expert.data.ep_fname,
            ep_lname: expert.data.ep_lname,
            ep_active: expert.data.ep_active =="true" ?"Y":"N"
          };
          this.ExpertInService.expert_in_insert(insert_expert_in);
          this.get_expert_in_all();
        }
      })
    return await modal.present();
  }
  ngOnInit() {
    this.get_expert_in_all();
  }
  public db_expert_in: any = null;

  set_expert_in_status() {
    for (let key in this.db_expert_in) {
      let value = this.db_expert_in[key]
      if (this.db_expert_in[key].ep_active == "Y") {
        this.db_expert_in[key].ep_active = true;
      } else {
        this.db_expert_in[key].ep_active = false;
      }
    }
  }
  // get all bank from database
  get_expert_in_all() {
    this.ExpertInService.get_all_expert_in_data().subscribe((res) => {
      this.db_expert_in = res;
      console.log(this.db_expert_in);
       this.set_expert_in_status();
    })

  }

    // change expert ep_active , ep_active
    async update_status_expert_in(expert){
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
              this.ExpertInService.update_expert_in_status(expert.ep_id,expert.ep_active).subscribe((res) => {
                if(res.affectedRows > 0){
                  this.get_expert_in_all();
                }
              })
            }
          }
        ]
      });
  
      await alert.present();
    }
  // remove_bank on index 


  async  remove_db_expert_in(expert) {
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
            this.ExpertInService.expert_in_delete(expert.ep_id).subscribe((res) => {
              
                this.get_expert_in_all();
              
            })
          }
        }
      ]
    });

    await alert.present();
  }

  async edit_expert_in(expert){
    const modal = await this.modalController.create({
      component: ExpertInUpdatePage,
      componentProps: {
        'ep_fname': expert.ep_fname,
        'ep_lname': expert.ep_lname,
        'ep_id': expert.ep_id
      }
    });

    modal.onDidDismiss().then((status) => {
      if(status != null){
        this.get_expert_in_all();
      }
    });
    return await modal.present()
  }
}
