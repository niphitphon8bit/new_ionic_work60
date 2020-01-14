import {ExpertTypeInsertPage} from './../expert-type-insert/expert-type-insert.page';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ExpertTypeService } from '../service/expert-type.service';

@Component({
  selector: 'app-expert-type',
  templateUrl: './expert-type.page.html',
  styleUrls: ['./expert-type.page.scss'],
})
export class ExpertTypePage implements OnInit {
 
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