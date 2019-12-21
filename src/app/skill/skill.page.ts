import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.page.html',
  styleUrls: ['./skill.page.scss'],
})
export class SkillPage implements OnInit {

  constructor() { }

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
