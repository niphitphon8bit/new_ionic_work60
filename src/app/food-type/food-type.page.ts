import { FoodInsertPage } from './../food-insert/food-insert.page';
import { ModalController, AlertController } from '@ionic/angular';
import { FoodTypeService } from './../service/food-type.service';
import { Component, OnInit } from '@angular/core';
import { FoodUpdatePage } from '../food-update/food-update.page';

@Component({
  selector: 'app-food-type',
  templateUrl: './food-type.page.html',
  styleUrls: ['./food-type.page.scss'],
})
export class FoodTypePage implements OnInit {

  public food_types:any = [];

  constructor(
    private foodTypeService: FoodTypeService,
    private modalController: ModalController,
    private alertController: AlertController
  ) { }
  
  ngOnInit() {
    this.get_all_food_type();
  }

  get_all_food_type() {
    this.food_types = []
    this.foodTypeService.get_all_food_type_data().subscribe((res) => {
      res.forEach(element => {
        this.food_types.push({
          ft_id : element.ft_id,
          ft_name_th: element.ft_name_th,
          ft_name_en: element.ft_name_en,
          ft_status: (element.ft_status == "Y" ? true : false)
        })
      });
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

  async change_status_food_type(foodtype){
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
            this.foodTypeService.update_food_type_status(foodtype.ft_id,foodtype.ft_status).subscribe((res) => {
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

  async edit_food_type(foodtpye){
    const modal = await this.modalController.create({
      component: FoodUpdatePage,
      componentProps: {
        'name_th': foodtpye.ft_name_th,
        'name_en': foodtpye.ft_name_en,
        'ft_id': foodtpye.ft_id
      }
    });

    modal.onDidDismiss().then((status) => {
      if(status != null){
        this.get_all_food_type()
      }
    });
    return await modal.present()
  }
}
