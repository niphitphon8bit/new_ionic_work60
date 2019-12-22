import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpertTypePageRoutingModule } from './expert-type-routing.module';

import { ExpertTypePage } from "./expert-type.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpertTypePageRoutingModule
  ],
  declarations: [ExpertTypePage]
})
export class ExpertTypePageModule {}
