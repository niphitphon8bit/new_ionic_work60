import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ModalController } from '@ionic/angular';
import { ExpertInInsertPage } from './../expert-in-insert/expert-in-insert.page';
import { ExpertInService } from './../service/expert-in.service'
=======
import { ModalController,AlertController } from '@ionic/angular';
import { ExpertInInsertPage } from './../expert-in-insert/expert-in-insert.page';
import { ExpertInService } from './../service/expert-in.service';
import {ExpertInUpdatePage} from '../expert-in-update/expert-in-update.page'


>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b



@Component({
  selector: 'app-expert-in',
  templateUrl: './expert-in.page.html',
  styleUrls: ['./expert-in.page.scss'],
})
export class ExpertInPage implements OnInit {

  constructor(
    private ExpertInService: ExpertInService,
<<<<<<< HEAD
    private modalController: ModalController
=======
    private modalController: ModalController,
    private alertController: AlertController

>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b
  ) { }

  async insert_expert_modal() {
    const modal = await this.modalController.create({
      component: ExpertInInsertPage
    })

    modal.onDidDismiss()
      .then((expert) => {
<<<<<<< HEAD
        if (expert.data.status) {
          var insert_expert_in = {
            name_th: expert.data.ep_fname,
            name_en: expert.data.ep_lname,
            status: expert.data.status
          };
          this.experts.push(insert_expert_in);
=======
        if (expert.data.ep_active) {
          var insert_expert_in = {
            ep_fname: expert.data.ep_fname,
            ep_lname: expert.data.ep_lname,
            ep_active: expert.data.ep_active =="true" ?"Y":"N"
          };
          this.ExpertInService.expert_in_insert(insert_expert_in);
          this.get_expert_in_all();
>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b
        }
      })
    return await modal.present();
  }
<<<<<<< HEAD
  private experts = [
    {
      name_th: 'นายโอ  พ่อใหญ่สุด',
      name_en: "A",
      status: 'true'
    },
    {
      name_th: 'นายแดง พ่อคุ้มกรม',
      name_en: "B",
      status: 'false'
    },
    {
      name_th: 'นายแสง  โสมุดดิที',
      name_en: "D",
      status: 'false'
    },
    {
      name_th: 'นางสาวเอ๋ 1000ไร่',
      name_en: "F",
      status: 'true'
    },
    {
      name_th: 'นายเปรมชัย  สไนเปอร์',
      name_en: "A",
      status: 'false'
    },
  ];
=======

>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b
  ngOnInit() {
    this.get_expert_in_all();
  }
  public db_expert_in: any = null;

  set_expert_in_status() {
    for (let key in this.db_expert_in) {
      let value = this.db_expert_in[key]
      if (this.db_expert_in[key].ep_active == "Y") {
<<<<<<< HEAD
        this.db_expert_in[key].status = true;
      } else {
        this.db_expert_in[key].status = false;
=======
        this.db_expert_in[key].ep_active = true;
      } else {
        this.db_expert_in[key].ep_active = false;
>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b
      }
    }
  }
  // get all bank from database
  get_expert_in_all() {
    this.ExpertInService.get_all_expert_in_data().subscribe((res) => {
      this.db_expert_in = res;
      console.log(this.db_expert_in);
<<<<<<< HEAD
      this.set_expert_in_status();
=======
       this.set_expert_in_status();
>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b
    })

  }

<<<<<<< HEAD
    // change bank status , ep_active
    change(expert) {
      let index = this.db_expert_in.indexOf(expert);
      if (this.db_expert_in[index].ep_active == "Y") {
        this.db_expert_in[index].ep_active = "N"
      } else {
        this.db_expert_in[index].ep_active = "Y"
      }
    }
  // remove_bank on index 
  remove_db_expert_in(expert_in) {
    let index = this.db_expert_in.indexOf(expert_in);
    console.log(expert_in.ba_id);
    if (index > -1) {
      this.db_expert_in.splice(index, 1);
    }
    this.ExpertInService.expert_in_delete(expert_in.ep_id);
  }
  remove_expert_in(expert) {
    let index = this.experts.indexOf(expert);
    if (index >= 0) {
      this.experts.splice(index, 1);
    }
=======
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
>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b
  }
}
