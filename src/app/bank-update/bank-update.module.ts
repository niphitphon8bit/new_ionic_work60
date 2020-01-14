import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BankUpdatePageRoutingModule } from './bank-update-routing.module';

import { BankUpdatePage } from './bank-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BankUpdatePageRoutingModule
  ],
  declarations: [BankUpdatePage]
})
export class BankUpdatePageModule {}
