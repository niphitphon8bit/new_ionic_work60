import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevelopsPageRoutingModule } from './develops-routing.module';

import { DevelopsPage } from './develops.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevelopsPageRoutingModule
  ],
  declarations: [DevelopsPage]
})
export class DevelopsPageModule {}
