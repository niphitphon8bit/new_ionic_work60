import { DevelopsInsertPage } from './../develops-insert/develops-insert.page';
import { DevelopService } from './../service/develop.service';
<<<<<<< HEAD
import { ModalController, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { DevelopsUpdatePage } from '../develops-update/develops-update.page';

=======
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b

@Component({
  selector: 'app-develops',
  templateUrl: './develops.page.html',
  styleUrls: ['./develops.page.scss'],
})
export class DevelopsPage implements OnInit {

<<<<<<< HEAD
  public develops :any = [];

  constructor(
    private DevelopService: DevelopService,
    private modalController: ModalController,
    private alertController: AlertController
=======
  constructor(
    private DevelopService: DevelopService,
    private modalController: ModalController
>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b
  ) {

  }

<<<<<<< HEAD
  ngOnInit() {
    this.get_all_develops();
  }

  get_all_develops() {
    this.develops = []
    this.DevelopService.get_all_develops_data().subscribe((res) => {
      res.forEach(element => {
        this.develops.push({
          dev_id : element.dev_id,
          dev_name_th: element.dev_name_th,
          dev_name_en: element.dev_name_en,
          dev_status: (element.dev_status == "Y" ? true : false)
        })
      });
    })
  }

  async insert_develops(){
    const modal = await this.modalController.create({
      component: DevelopsInsertPage
    });

    modal.onDidDismiss().then((status) => {
      if(status != null){
        this.get_all_develops()
      }
    });
    return await modal.present()
  }

  async remove_develops(develops){
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
            this.DevelopService.delete_develops_data(develops.dev_id).subscribe((res) => {
              if(res.affectedRows > 0){
                this.get_all_develops()
              }
            })
          }
        }
      ]
    });

    await alert.present();
  }

  async change_status_develops(develops){
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
            this.DevelopService.update_develops_status(develops.dev_id,develops.dev_status).subscribe((res) => {
              if(res.affectedRows > 0){
                this.get_all_develops()
              }
            })
          }
        }
      ]
    });

    await alert.present();
  }

  async edit_develops(develops){
    const modal = await this.modalController.create({
      component: DevelopsUpdatePage,
      componentProps: {
        'name_th': develops.dev_name_th,
        'name_en': develops.dev_name_en,
        'dev_id': develops.dev_id
      }
    });

    modal.onDidDismiss().then((status) => {
      if(status != null){
        this.get_all_develops()
      }
    });
    return await modal.present()
  }
=======
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



>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b
}
