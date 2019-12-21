import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SkillInsertPageRoutingModule } from './skill-insert-routing.module';

import { SkillInsertPage } from './skill-insert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SkillInsertPageRoutingModule
  ],
  declarations: [SkillInsertPage]
})
export class SkillInsertPageModule {}
