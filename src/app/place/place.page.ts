import { PlaceInsertPage } from '../place-insert/place-insert.page';
<<<<<<< HEAD
import { ModalController } from '@ionic/angular';
import { PlaceService } from './../service/place.service';
import { Component, OnInit, Input } from '@angular/core';
=======
import { ModalController, AlertController} from '@ionic/angular';
import { PlaceService } from './../service/place.service';
import { Component, OnInit, Input } from '@angular/core';
import { PlaceUpdatePage } from '../place-update/place-update.page';

>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b


@Component({
  selector: 'app-place',
  templateUrl: './place.page.html',
  styleUrls: ['./place.page.scss'],
})
export class PlacePage implements OnInit {

<<<<<<< HEAD
  constructor(
    private PlaceService: PlaceService,
    public modalController: ModalController
  ) { }

  async insert_place_modal() {
=======
  public place:any = [];

  constructor(
    private PlaceService: PlaceService,
    public modalController: ModalController,
    private alertController: AlertController
  ) { }

  async insert_place(){
>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b
    const modal = await this.modalController.create({
      component: PlaceInsertPage
    });

<<<<<<< HEAD
    modal.onDidDismiss()
      .then((place) => {
        if (place.data.status) {
          console.log(place);
          console.log(Object.values(place));
          console.log(place.data.name_eng);

          var insert_place = {
            name_th: place.data.name_th,
            name_eng: place.data.name_eng,
            status: place.data.status
          };
          this.place.push(insert_place);
        }
      })

    return await modal.present();
  }
  public db_places: any = null;

  private place = [{
    name_th: 'มหาวิทยาลัยบูรพา',
    name_eng: 'Burapha University',
    status: 'true'
  },
  {
    name_th: 'ฝรั่งเศษ',
    name_eng: 'Paris, France',
    status: 'false'
  },
  {
    name_th: 'อิตาลี่',
    name_eng: 'Italy',
    status: 'false'
  }]
=======
    modal.onDidDismiss().then((status) => {
      if(status != null){
        this.get_all_place()
      }
    });
    return await modal.present()
  }

  public db_places: any = null;

>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b

  ngOnInit() {
    this.get_all_place();
  }

<<<<<<< HEAD
=======

// get all place from database
  get_all_place() {
    this.place = []
    this.PlaceService.get_all_place_data().subscribe((res) => {
      res.forEach(element => {
        this.place.push({
          place_id : element.place_id,
          place_name_th: element.place_name_th,
          place_name_en: element.place_name_en,
          place_status: (element.place_status == "Y" ? true : false)
        })
      });
    })
  }

>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b
  /*
 * set_place_status
 * set_place_status from database y to true n to false by add new data 
 * create Niphitphon 12/22/2562
 */
<<<<<<< HEAD
  set_place_status() {
    for (let key in this.db_places) {
      let value = this.db_places[key]
      if (this.db_places[key].place_status == "Y") {
        this.db_places[key].status = true;
      } else {
        this.db_places[key].status = false;
      }
    }
  }

  // get all place from database
  get_all_place() {
    this.PlaceService.get_all_place_data().subscribe((res) => {
      this.db_places = res;
      console.log(this.db_places);
      this.set_place_status();
    })

  }

  // change place status , ba_status
  change(place) {
    let index = this.db_places.indexOf(place);
    if (this.db_places[index].place_status == "Y") {
      this.db_places[index].place_status = "N"
    } else {
      this.db_places[index].place_status = "Y"
    }
  }
  // remove_place on index 
  remove_db_place(place) {
    let index = this.db_places.indexOf(place);
    if (index > -1) {
      this.db_places.splice(index, 1);
    }
  }
  // remove_place on index 

  remove_place(p) {
    let index = this.place.indexOf(p);
    if (index >= 0) {
      this.place.splice(index, 1);
    }
  }
}
=======
  
async change_status_place(p){
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
          this.PlaceService.update_place_status(p.place_id,p.place_status).subscribe((res) => {
            if(res.affectedRows > 0){
              this.get_all_place()
            }
          })
        }
      }
    ]
  });

  await alert.present();
}

  async remove_place(p){
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
            this.PlaceService.delete_place_data(p.place_id).subscribe((res) => {
              if(res.affectedRows > 0){
                this.get_all_place()
              }
            })
          }
        }
      ]
    });

    await alert.present();
  }

  
  async edit_place(p){
    const modal = await this.modalController.create({
      component: PlaceUpdatePage,
      componentProps: {
        'name_th': p.place_name_th,
        'name_en': p.place_name_en,
        'place_id': p.place_id
      }
    });

    modal.onDidDismiss().then((status) => {
      if(status != null){
        this.get_all_place()
      }
    });
    return await modal.present()
  }
  
}
>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b
