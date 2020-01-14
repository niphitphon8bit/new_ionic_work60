import { MajorInsertPage } from './../major-insert/major-insert.page';
import { MajorService } from './../service/major.service';
import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ModalController } from '@ionic/angular';
=======
import { ModalController, AlertController } from '@ionic/angular';
import { MajorUpdatePage } from '../major-update/major-update.page';

>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b
@Component({
  selector: 'app-major',
  templateUrl: './major.page.html',
  styleUrls: ['./major.page.scss'],
})
export class MajorPage implements OnInit {
<<<<<<< HEAD

  constructor(
    private MajorService: MajorService,
    private modalController: ModalController
  ) {

  }

  async insert_major_modal() {
    const modal = await this.modalController.create({
      component: MajorInsertPage
    })

    modal.onDidDismiss()
      .then((major) => {
        if (major.data.status) {
          var insert_major = {
            name_th: major.data.name_th,
            name_en: major.data.name_en,
            status: major.data.status
          };
          this.majors.push(insert_major);
        }
      })
    return await modal.present();
  }

  public db_majors: any = null;
  private majors = [
    {
      name_th: 'สาขาวิชา',
      name_en: "Subject",
      status: 'true'
    },
    {
      name_th: 'สาขาวิชาวิศวกรรมซอฟต์แวร์',
      name_en: "Software Engineering",
      status: 'false'
    },
    {
      name_th: 'สาขาคอมพิวเตอร์ธุรกิจ',
      name_en: "Computer Business",
      status: 'false'
    },

  ];
  ngOnInit() {
    this.get_all_major();
=======
  
  public majors:any = [];

  constructor(
    private MajorService: MajorService,
    private modalController: ModalController,
    private alertController: AlertController

  ) { }

  ngOnInit() {
    this.get_all_major();
  }


  get_all_major() {
    this.majors = []
    this.MajorService.get_all_major_data().subscribe((res) => {
      res.forEach(element =>{
      this.majors.push({
        mj_id : element.mj_id,
        mj_name_th : element.mj_name_th,
        mj_name_en : element.mj_name_en,
        mj_status : (element.mj_status == "Y" ? true :false)
      })
      });
    })
  }

  async insert_major() {
    const modal = await this.modalController.create({
      component: MajorInsertPage
    })

    modal.onDidDismiss().then((status) => {
      if(status != null){
        this.get_all_major()
      }
    });
    return await modal.present()
>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b
  }
  /*
   * set_major_status
   * set_major_status from database y to true n to false by add new data 
<<<<<<< HEAD
   * create Niphitphon 12/22/2562
   */
  set_major_status() {
    for (let key in this.db_majors) {
      let value = this.db_majors[key]
      if (this.db_majors[key].mj_status == "Y") {
        this.db_majors[key].status = true;
      } else {
        this.db_majors[key].status = false;
      }
    }
  }

  // get all major from database
  get_all_major() {
    this.MajorService.get_all_major_data().subscribe((res) => {
      this.db_majors = res;
      console.log(this.db_majors)
      this.set_major_status();
    })

  }

  // change major status , mj_status
  change(major) {
    let index = this.db_majors.indexOf(major);
    if (this.db_majors[index].mj_status == "Y") {
      this.db_majors[index].mj_status = "N"
    } else {
      this.db_majors[index].mj_status = "Y"
    }
  }

  // remove_major on index 
  remove_db_major(major) {
    let index = this.db_majors.indexOf(major);
    if (index > -1) {
      this.db_majors.splice(index, 1);
    }
  }

  // remove_major on index 
  remove_major(major) {
    let index = this.majors.indexOf(major);
    if (index > -1) {
      this.majors.splice(index, 1);
    }
  }
}
=======
   * create Artit  14/01/2563
   */

  async remove_majors(major){
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
            this.MajorService.delete_major_data(major.mj_id).subscribe((res) => {
              if(res.affectedRows > 0){
                this.get_all_major()
              }
            })
          }
        }
      ]
    });
    await alert.present();
  }
  async change_status_major(major){
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
            this.MajorService.update_major_status(major.mj_id,major.mj_status).subscribe((res) => {
              if(res.affectedRows > 0){
                this.get_all_major()
              }
            })
          }
        }
      ]
    });
    await alert.present();
  }

  async edit_major(major){
    const modal = await this.modalController.create({
      component: MajorUpdatePage,
      componentProps: {
        'name_th': major.mj_name_th,
        'name_en': major.mj_name_en,
        'mj_id': major.mj_id
      }
    });

    modal.onDidDismiss().then((status) => {
      if(status != null){
        this.get_all_major()
      }
    });
    return await modal.present()
  }


}
>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b
