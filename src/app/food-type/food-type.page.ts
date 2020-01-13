import { FoodInsertPage } from './../food-insert/food-insert.page';
import { ModalController, AlertController } from '@ionic/angular';
import { FoodTypeService } from './../service/food-type.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-type',
  templateUrl: './food-type.page.html',
  styleUrls: ['./food-type.page.scss'],
})
export class FoodTypePage implements OnInit {

  public food_types: any = null;

  constructor(
    private foodTypeService: FoodTypeService,
    private modalController: ModalController,
    private alertController: AlertController
  ) { }
  
  ngOnInit() {
    this.get_all_food_type();
  }

  get_all_food_type() {
    this.foodTypeService.get_all_food_type_data().subscribe((res) => {
      this.food_types = res;
    })
  }

  async insert_food_type(){
    const modal = await this.modalController.create({
      component: FoodInsertPage
    });

    modal.onDidDismiss().then((status) => {
      if(status != null){
        this.get_all_food_type()
      }
    });
    return await modal.present()
  }

  async remove_food_type(foodtype){
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
            this.foodTypeService.delete_food_type_data(foodtype.ft_id).subscribe((res) => {
              if(res.affectedRows > 0){
                this.get_all_food_type()
              }
            })
          }
        }
      ]
    });

    await alert.present();
  }

  change_status_food_type(foodtype){
    console.log(foodtype)
  }
}
