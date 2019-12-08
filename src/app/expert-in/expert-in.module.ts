import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpertInPageRoutingModule } from './expert-in-routing.module';

import { ExpertInPage } from './expert-in.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpertInPageRoutingModule
  ],
  declarations: [ExpertInPage]
})
export class ExpertInPageModule {}
