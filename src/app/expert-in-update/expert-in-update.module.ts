import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpertInUpdatePageRoutingModule } from './expert-in-update-routing.module';

import { ExpertInUpdatePage } from './expert-in-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpertInUpdatePageRoutingModule
  ],
  declarations: [ExpertInUpdatePage]
})
export class ExpertInUpdatePageModule {}
