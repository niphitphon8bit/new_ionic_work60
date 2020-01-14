import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpertInInsertPageRoutingModule } from './expert-in-insert-routing.module';

import { ExpertInInsertPage } from './expert-in-insert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpertInInsertPageRoutingModule
  ],
  declarations: [ExpertInInsertPage]
})
export class ExpertInInsertPageModule {}
