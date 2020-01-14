import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodTypePage } from './food-type.page';

const routes: Routes = [
  {
    path: '',
    component: FoodTypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodTypePageRoutingModule {}
