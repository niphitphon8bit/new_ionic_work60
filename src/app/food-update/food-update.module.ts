import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodUpdatePageRoutingModule } from './food-update-routing.module';

import { FoodUpdatePage } from './food-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodUpdatePageRoutingModule
  ],
  declarations: [FoodUpdatePage]
})
export class FoodUpdatePageModule {}
