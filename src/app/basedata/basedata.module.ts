import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasedataPageRoutingModule } from './basedata-routing.module';

import { BasedataPage } from './basedata.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasedataPageRoutingModule
  ],
  declarations: [BasedataPage]
})
export class BasedataPageModule {}
