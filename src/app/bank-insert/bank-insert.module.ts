import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BankInsertPageRoutingModule } from './bank-insert-routing.module';

import { BankInsertPage } from './bank-insert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BankInsertPageRoutingModule
  ],
  declarations: [BankInsertPage]
})
export class BankInsertPageModule {}
