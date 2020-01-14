<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { NavParams, ModalController, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { ExpertOutService } from './../service/expert-out.service';
>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b

@Component({
  selector: 'app-expert-out-insert',
  templateUrl: './expert-out-insert.page.html',
  styleUrls: ['./expert-out-insert.page.scss'],
})
export class ExpertOutInsertPage implements OnInit {

<<<<<<< HEAD
  constructor() { }
=======
  private fname: string;
  private lname: string;
  private status: string;

  constructor(private location: Location,
    private NavParams: NavParams,
    private modalCtrl: ModalController,
    private ExpertOutService: ExpertOutService,
    private alertController: AlertController) { 

      this.fname = "";
      this.lname = "";
      this.status = "true";
    }
>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b

  ngOnInit() {
  }

<<<<<<< HEAD
=======
  public closeModal() {
    this.modalCtrl.dismiss("close");
  }

  back() {
    this.location.back();
  }
  expert_out_insert() {
    this.ExpertOutService.insert_expert_out_data(this.fname,this.lname).subscribe((res) => {
      if(res.affectedRows > 0){
        this.presentAlert("บันทึกสำเร็จ","รายการประเภทอาหารถูกเพิ่มเรียบร้อย")
      }else{
        this.presentAlert("ไม่สามารถบันทึกข้อมูลได้","กรุณาติดต่อผู้ดูแลระบบ")
      }
    })
    
  }

  async presentAlert(title:string,description:string) {
    const alert = await this.alertController.create({
      header: title,
      message: description,
      buttons: [
        {
          text: 'ตกลง',
          handler: (event) => {
            this.closeModal()
          }
        }
      ]
    });

    await alert.present();
  }

>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b
}
