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
    
  public db_expert: any = null
  private index_of_types = [
    {
      title: 'วิทยากรบรรยาย',
      status: 'true'
    },

    {
      title: 'วิทยากรพี่เลี้ยง',
      status: 'false'
    },

    {
      title: 'วิทยากรสันทนาการ',
      status: 'true'
    },

    {
      title: 'วิทยากรพี่กลุ่ม',
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
         
          title: expert.data.text,
          status: expert.data.status
        };
        this.index_of_types.push(insert_expert);  
      }
    })
  return await modal.present();
}

set_expert_status() {
  for (let key in this.db_expert) {
    let value = this.db_expert[key]
    if (this.db_expert[key].ept_status == "Y") {
      this.db_expert[key].status = true;
    } else {
      this.db_expert[key].status = false;
    }
  }
}

get_all_expert() {
  this.expertTypeService.get_all_expert_data().subscribe((res) => {
    this.db_expert = res;
    this.set_expert_status();
  })

}

change(expert) {
  let index = this.db_expert.indexOf(expert);
  if (this.db_expert[index].ept_status == "Y") {
    this.db_expert[index].ept_status = "N"
  } else {
    this.db_expert[index].ept_status = "Y"
  }
}

remove_db_expert(expert) {
  let index = this.db_expert.indexOf(expert);
  if (index > -1) {
    this.db_expert.splice(index, 1);
  }
}

remove_expert_type(index_of_type){
  let index = this.index_of_types.indexOf(index_of_type);
  if(index > -1){
    this.index_of_types.splice(index,1);
  }
}


}