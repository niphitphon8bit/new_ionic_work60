import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpertTypeUpdatePageRoutingModule } from './expert-type-update-routing.module';

import { ExpertTypeUpdatePage } from './expert-type-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpertTypeUpdatePageRoutingModule
  ],
  declarations: [ExpertTypeUpdatePage]
})
export class ExpertTypeUpdatePageModule {}
