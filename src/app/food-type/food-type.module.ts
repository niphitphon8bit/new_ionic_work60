import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodTypePageRoutingModule } from './food-type-routing.module';

import { FoodTypePage } from './food-type.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodTypePageRoutingModule
  ],
  declarations: [FoodTypePage]
})
export class FoodTypePageModule {}
