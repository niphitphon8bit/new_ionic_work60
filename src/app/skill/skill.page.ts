import { Component, OnInit ,Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SkillInsertPage } from '../skill-insert/skill-insert.page';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.page.html',
  styleUrls: ['./skill.page.scss'],
})
export class SkillPage implements OnInit {

  constructor(public modalController : ModalController) { }

  async insert_modal(){
    const modal = await this.modalController.create({
      component : SkillInsertPage
    });

    modal.onDidDismiss()
    .then((skill) =>{
      console.log(skill);
      console.log(Object.values(skill));
      console.log(skill.data.skill_name);

      var insert_skill = {
        title: skill.data.skill_name,
        grade: skill.data.skill_grade,
        status: skill.data.skill_status
      };

      
      this.skills.push(insert_skill);
    })

    return await modal.present();
  }

  private skills = [
    {
      title: 'HTML',
      grade: "A",
      status: 'true'
    },
    {
      title: 'CSS',
      grade: "B",
      status: 'false'
    },
    {
      title: 'SQL',
      grade: "D",
      status: 'false'
    },
    {
      title: 'PHP',
      grade: "F",
      status: 'true'
    },
    {
      title: 'javascript',
      grade: "A",
      status: 'false'
    },
  ];

  ngOnInit() {
  }

  remove_skill(skill){
    let index = this.skills.indexOf(skill);
    if(index > -1){
      this.skills.splice(index,1);
    }
  }

}
