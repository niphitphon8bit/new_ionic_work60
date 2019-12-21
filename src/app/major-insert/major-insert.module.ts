import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MajorInsertPageRoutingModule } from './major-insert-routing.module';

import { MajorInsertPage } from './major-insert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MajorInsertPageRoutingModule
  ],
  declarations: [MajorInsertPage]
})
export class MajorInsertPageModule {}
