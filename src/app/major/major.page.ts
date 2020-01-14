import { MajorInsertPage } from './../major-insert/major-insert.page';
import { MajorService } from './../service/major.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-major',
  templateUrl: './major.page.html',
  styleUrls: ['./major.page.scss'],
})
export class MajorPage implements OnInit {

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
  }
  /*
   * set_major_status
   * set_major_status from database y to true n to false by add new data 
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
