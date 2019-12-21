import { Location } from '@angular/common';
import { Component, OnInit , Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
@Component({
  selector: 'app-skill-insert',
  templateUrl: './skill-insert.page.html',
  styleUrls: ['./skill-insert.page.scss'],
})
export class SkillInsertPage implements OnInit {

  private skill_name : string;
  private skill_grade : string;
  private skill_status : string;


  constructor(
    private location: Location,
    public NavParams : NavParams,
    public modalCtrl : ModalController
    ) { 
      this.skill_name = "";
      this.skill_grade = "";
      this.skill_status = "true";
    }

    public closeModal(){
      this.modalCtrl.dismiss({
        'dismissed': true
      })
    }

  ngOnInit() {
  }
  
  back(){
    this.location.back();
  }

  insert_skill(){
    console.log(this.skill_name,this.skill_grade);
    
    this.modalCtrl.dismiss({
      'dismissed': true,
      'skill_name': this.skill_name,
      'skill_grade': this.skill_grade,
      'skill_status': "true"
    });
  }
  
  

}

