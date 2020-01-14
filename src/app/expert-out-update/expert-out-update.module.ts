import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpertOutUpdatePageRoutingModule } from './expert-out-update-routing.module';

import { ExpertOutUpdatePage } from './expert-out-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpertOutUpdatePageRoutingModule
  ],
  declarations: [ExpertOutUpdatePage]
})
export class ExpertOutUpdatePageModule {}
