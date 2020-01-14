import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MajorUpdatePageRoutingModule } from './major-update-routing.module';

import { MajorUpdatePage } from './major-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MajorUpdatePageRoutingModule
  ],
  declarations: [MajorUpdatePage]
})
export class MajorUpdatePageModule {}
