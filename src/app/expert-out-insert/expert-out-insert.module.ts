import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpertOutInsertPageRoutingModule } from './expert-out-insert-routing.module';

import { ExpertOutInsertPage } from './expert-out-insert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpertOutInsertPageRoutingModule
  ],
  declarations: [ExpertOutInsertPage]
})
export class ExpertOutInsertPageModule {}
