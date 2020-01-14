import { PlaceInsertPage } from '../place-insert/place-insert.page';
import { ModalController, AlertController} from '@ionic/angular';
import { PlaceService } from './../service/place.service';
import { Component, OnInit, Input } from '@angular/core';
import { PlaceUpdatePage } from '../place-update/place-update.page';



@Component({
  selector: 'app-place',
  templateUrl: './place.page.html',
  styleUrls: ['./place.page.scss'],
})
export class PlacePage implements OnInit {

  public place:any = [];

  constructor(
    private PlaceService: PlaceService,
    public modalController: ModalController,
    private alertController: AlertController
  ) { }

  async insert_place(){
    const modal = await this.modalController.create({
      component: PlaceInsertPage
    });

    modal.onDidDismiss().then((status) => {
      if(status != null){
        this.get_all_place()
      }
    });
    return await modal.present()
  }

  public db_places: any = null;


  ngOnInit() {
    this.get_all_place();
  }


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

  /*
 * set_place_status
 * set_place_status from database y to true n to false by add new data 
 * create Niphitphon 12/22/2562
 */
  
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