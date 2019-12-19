import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevelopsInsertPageRoutingModule } from './develops-insert-routing.module';

import { DevelopsInsertPage } from './develops-insert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevelopsInsertPageRoutingModule
  ],
  declarations: [DevelopsInsertPage]
})
export class DevelopsInsertPageModule {}
