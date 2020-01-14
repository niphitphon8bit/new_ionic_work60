import { DevelopsInsertPage } from './../develops-insert/develops-insert.page';
import { DevelopService } from './../service/develop.service';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-develops',
  templateUrl: './develops.page.html',
  styleUrls: ['./develops.page.scss'],
})
export class DevelopsPage implements OnInit {

  constructor(
    private DevelopService: DevelopService,
    private modalController: ModalController
  ) {

  }

  async insert_develop_modal() {
    const modal = await this.modalController.create({
      component: DevelopsInsertPage
    })

    modal.onDidDismiss()
      .then((develop) => {
        if (develop.data.status) {
          var insert_develop = {
            name_th: develop.data.name_th,
            name_en: develop.data.name_en,
            status: develop.data.status
          };
          this.develops.push(insert_develop);
        }
      })
    return await modal.present();
  }

  public db_develops: any = null;

  private develops = [
    {
      name_th: 'ด้านการพัฒนา',
      name_en: 'eng',
      status: 'true'
    }, {
      name_th: 'ด้านวิจัย',
      name_en: 'eng',
      status: 'true'
    }, {
      name_th: 'ด้านสื่อสาร',
      name_en: 'eng',
      status: 'false'
    },


  ]


  ngOnInit() {
    this.get_all_develop();
  }

  /*
  * set_develop_status
  * set_develop_status from database y to true n to false by add new data 
  * create Niphitphon 12/22/2562
  */
  set_develop_status() {
    for (let key in this.db_develops) {
      let value = this.db_develops[key]
      if (this.db_develops[key].dev_status == "Y") {
        this.db_develops[key].status = true;
      } else {
        this.db_develops[key].status = false;
      }
    }
  }

  // get all develop from database
  get_all_develop() {
    this.DevelopService.get_all_develop_data().subscribe((res) => {
      this.db_develops = res;
      this.set_develop_status();
    })

  }

  // change develop status , dev_status
  change(develop) {
    let index = this.db_develops.indexOf(develop);
    if (this.db_develops[index].dev_status == "Y") {
      this.db_develops[index].dev_status = "N"
    } else {
      this.db_develops[index].dev_status = "Y"
    }
  }

  // remove_develop on index 
  remove_db_develop(develop) {
    let index = this.db_develops.indexOf(develop);
    if (index > -1) {
      this.db_develops.splice(index, 1);
    }
  }

  remove(develop) {
    let index = this.develops.indexOf(develop);
    if (index > -1) {
      this.develops.splice(index, 1);
    }
  }



}
