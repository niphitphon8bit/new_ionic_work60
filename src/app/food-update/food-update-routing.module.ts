import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodUpdatePage } from './food-update.page';

const routes: Routes = [
  {
    path: '',
    component: FoodUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodUpdatePageRoutingModule {}
