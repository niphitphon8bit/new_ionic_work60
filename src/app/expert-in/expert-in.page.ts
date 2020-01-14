import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ExpertInInsertPage } from './../expert-in-insert/expert-in-insert.page';
import { ExpertInService } from './../service/expert-in.service'



@Component({
  selector: 'app-expert-in',
  templateUrl: './expert-in.page.html',
  styleUrls: ['./expert-in.page.scss'],
})
export class ExpertInPage implements OnInit {

  constructor(
    private ExpertInService: ExpertInService,
    private modalController: ModalController
  ) { }

  async insert_expert_modal() {
    const modal = await this.modalController.create({
      component: ExpertInInsertPage
    })

    modal.onDidDismiss()
      .then((expert) => {
        if (expert.data.status) {
          var insert_expert_in = {
            name_th: expert.data.ep_fname,
            name_en: expert.data.ep_lname,
            status: expert.data.status
          };
          this.experts.push(insert_expert_in);
        }
      })
    return await modal.present();
  }
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
  ngOnInit() {
    this.get_expert_in_all();
  }
  public db_expert_in: any = null;

  set_expert_in_status() {
    for (let key in this.db_expert_in) {
      let value = this.db_expert_in[key]
      if (this.db_expert_in[key].ep_active == "Y") {
        this.db_expert_in[key].status = true;
      } else {
        this.db_expert_in[key].status = false;
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
  }
}
