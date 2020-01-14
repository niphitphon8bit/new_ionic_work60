import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodInsertPage } from './food-insert.page';

const routes: Routes = [
  {
    path: '',
    component: FoodInsertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodInsertPageRoutingModule {}
