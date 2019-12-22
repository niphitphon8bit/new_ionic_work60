import { PlaceInsertPage } from '../place-insert/place-insert.page';
import { ModalController } from '@ionic/angular';
import { Component, OnInit ,Input } from '@angular/core';


@Component({
  selector: 'app-place',
  templateUrl: './place.page.html',
  styleUrls: ['./place.page.scss'],
})
export class PlacePage implements OnInit {

  constructor(public modalController : ModalController) { }

  async insert_modal(){
    const modal = await this.modalController.create({
      component : PlaceInsertPage
    });

    modal.onDidDismiss()
    .then((place) =>{
      console.log(place);
      console.log(Object.values(place));
      console.log(place.data.name_eng);

      var insert_place = {
        name_th: place.data.name_th,
        name_eng: place.data.name_eng,
        status: place.data.status
      };

      
      this.place.push(insert_place);
    })

    return await modal.present();
  }

  private place = [{
    name_th: '',
    name_eng: 'Burapha University',
    status: 'true'
  },
  {
    name_th: '',
    name_eng: 'Paris, France',
    status: 'false'
  },
  {
    name_th: '',
    name_eng: 'Italy',
    status: 'false'
  }]

  ngOnInit() {
  }

  remove_place(p){
    let index = this.place.indexOf(p);
    if(index >= 0){
      this.place.splice(index, 1);
    }
  }
}
