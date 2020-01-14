import {ExpertTypeInsertPage} from './../expert-type-insert/expert-type-insert.page';
<<<<<<< HEAD
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ExpertTypeService } from '../service/expert-type.service';
=======
import { ModalController, AlertController  } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ExpertTypeService } from '../service/expert-type.service';
import { ExpertTypeUpdatePage } from '../expert-type-update/expert-type-update.page'
>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b

@Component({
  selector: 'app-expert-type',
  templateUrl: './expert-type.page.html',
  styleUrls: ['./expert-type.page.scss'],
})
export class ExpertTypePage implements OnInit {
 
<<<<<<< HEAD
  constructor(
    private expertTypeService: ExpertTypeService,
    private modalController: ModalController
    ) { }
    
  public db_expert_types: any = null;
  private expert_types  = [
    {
      name_th: 'วิทยากรบรรยาย',
      name_en: 'Spoker',
      status: 'true'
    },

    {
      name_th: 'วิทยากรพี่เลี้ยง',
      name_en: 'Group',
      status: 'false'
    },

    {
      name_th: 'วิทยากรสันทนาการ',
      name_en: 'Dancer',
      status: 'true'
    },

    {
      name_th: 'วิทยากรพี่กลุ่ม',
      name_en: 'Major Group',
      status: 'false'
    }
  ];
  ngOnInit() {
    this.get_all_expert();
  }
  
  async insert_expert_type_modal() {
    const modal = await this.modalController.create({
      component: ExpertTypeInsertPage
    })
    modal.onDidDismiss()
    .then((expert) => {
      if(expert.data.status){
        var insert_expert = {
          name_th: expert.data.name_th,
          name_en: expert.data.name_en,
          status: expert.data.status
        };
        this.expert_types.push(insert_expert);  
      }
    })
  return await modal.present();
}

set_expert_status() {
  for (let key in this.db_expert_types) {
    let value = this.db_expert_types[key]
    if (this.db_expert_types[key].ept_status == "Y") {
      this.db_expert_types[key].status = true;
    } else {
      this.db_expert_types[key].status = false;
    }
    console.log(this.db_expert_types[key])
  }
}

get_all_expert() {
  this.expertTypeService.get_all_expert_type_data().subscribe((res) => {
    this.db_expert_types = res;
    console.log(res);
    console.log(this.db_expert_types)
    this.set_expert_status();
  })
  console.log(this.db_expert_types)
}

change(expert) {
  let index = this.db_expert_types.indexOf(expert);
  if (this.db_expert_types[index].ept_status == "Y") {
    this.db_expert_types[index].ept_status = "N"
  } else {
    this.db_expert_types[index].ept_status = "Y"
  }
}

remove_db_expert_types(expert) {
  let index = this.db_expert_types.indexOf(expert);
  if (index > -1) {
    this.db_expert_types.splice(index, 1);
  }
}

remove_expert_type(expert){
  let index = this.expert_types .indexOf(expert);
  if(index > -1){
    this.expert_types .splice(index,1);
  }
}


}
=======
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
>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b
