import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevelopsUpdatePageRoutingModule } from './develops-update-routing.module';

import { DevelopsUpdatePage } from './develops-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevelopsUpdatePageRoutingModule
  ],
  declarations: [DevelopsUpdatePage]
})
export class DevelopsUpdatePageModule {}
