import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpertTypeInsertPageRoutingModule } from './expert-type-insert-routing.module';

import { ExpertTypeInsertPage } from './expert-type-insert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpertTypeInsertPageRoutingModule
  ],
  declarations: [ExpertTypeInsertPage]
})
export class ExpertTypeInsertPageModule {}
