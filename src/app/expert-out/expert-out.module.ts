import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpertOutPageRoutingModule } from './expert-out-routing.module';

import { ExpertOutPage } from './expert-out.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpertOutPageRoutingModule
  ],
  declarations: [ExpertOutPage]
})
export class ExpertOutPageModule {}
