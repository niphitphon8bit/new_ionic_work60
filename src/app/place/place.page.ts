import { PlaceInsertPage } from '../place-insert/place-insert.page';
import { ModalController } from '@ionic/angular';
import { PlaceService } from './../service/place.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-place',
  templateUrl: './place.page.html',
  styleUrls: ['./place.page.scss'],
})
export class PlacePage implements OnInit {

  constructor(
    private PlaceService: PlaceService,
    public modalController: ModalController
  ) { }

  async insert_place_modal() {
    const modal = await this.modalController.create({
      component: PlaceInsertPage
    });

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

  ngOnInit() {
    this.get_all_place();
  }

  /*
 * set_place_status
 * set_place_status from database y to true n to false by add new data 
 * create Niphitphon 12/22/2562
 */
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
