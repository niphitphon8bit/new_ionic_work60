import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaceUpdatePageRoutingModule } from './place-update-routing.module';

import { PlaceUpdatePage } from './place-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaceUpdatePageRoutingModule
  ],
  declarations: [PlaceUpdatePage]
})
export class PlaceUpdatePageModule {}
