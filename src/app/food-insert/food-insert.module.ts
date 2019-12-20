import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodInsertPageRoutingModule } from './food-insert-routing.module';

import { FoodInsertPage } from './food-insert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodInsertPageRoutingModule
  ],
  declarations: [FoodInsertPage]
})
export class FoodInsertPageModule {}
