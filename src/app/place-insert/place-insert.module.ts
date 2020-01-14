import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaceInsertPageRoutingModule } from './place-insert-routing.module';

import { PlaceInsertPage } from './place-insert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaceInsertPageRoutingModule
  ],
  declarations: [PlaceInsertPage]
})
export class PlaceInsertPageModule {}
