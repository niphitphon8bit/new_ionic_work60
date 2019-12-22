import { FoodInsertPage } from './../food-insert/food-insert.page';
import { ModalController } from '@ionic/angular';
import { FoodTypeService } from './../service/food-type.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-type',
  templateUrl: './food-type.page.html',
  styleUrls: ['./food-type.page.scss'],
})
export class FoodTypePage implements OnInit {

  constructor(
    private foodTypeService: FoodTypeService,
    private modalController: ModalController
  ) { }

  async insert_food_type_modal() {
    const modal = await this.modalController.create({
      component: FoodInsertPage
    })

    modal.onDidDismiss()
      .then((food_type) => {
        if (food_type.data.status) {
          var insert_food_type = {
            name_th: food_type.data.name_th,
            name_en: food_type.data.name_en,
            status: food_type.data.status
          }
          this.food_types.push(insert_food_type);
        }
      })
    return await modal.present();
  }

  //db_food_type query from database
  public db_food_types: any = null;

  private food_types = [
    {
      name_th: "ไม่กินผัก",
      name_en: 'No Vegetable',
      status: 'true',
    },
    {
      name_th: 'กินคลีน',
      name_en: 'Clean food',
      status: 'false',
    }
  ];

  ngOnInit() {
    this.get_all_food_type();
  }

  /*
  * set_food_type_status
  * set_food_type_status from database y to true n to false by add new data 
  * create Niphitphon 12/22/2562
  */
  set_food_type_status() {
    for (let key in this.db_food_types) {
      let value = this.db_food_types[key]
      if (this.db_food_types[key].ft_status == "Y") {
        this.db_food_types[key].status = true;
      } else {
        this.db_food_types[key].status = false;
      }
    }
  }
  // get all food_type from database
  get_all_food_type() {
    this.foodTypeService.get_all_food_type_data().subscribe((res) => {
      this.db_food_types = res;
      console.log(this.db_food_types);
      this.set_food_type_status();
    })

  }

  // change food_type status , ba_status
  change(food_type) {
    let index = this.db_food_types.indexOf(food_type);
    if (this.db_food_types[index].ba_status == "Y") {
      this.db_food_types[index].ba_status = "N"
    } else {
      this.db_food_types[index].ba_status = "Y"
    }
  }

  // remove_food_type on index 
  remove_db_food_type(food_type) {
    let index = this.db_food_types.indexOf(food_type);
    if (index > -1) {
      this.db_food_types.splice(index, 1);
    }
  }

  // remove_food_type on index 
  remove_food_type(food_type) {
    let index = this.food_types.indexOf(food_type);
    if (index > -1) {
      this.food_types.splice(index, 1);
    }
  }

}
