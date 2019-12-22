import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaceInsertPage } from './place-insert.page';

const routes: Routes = [
  {
    path: '',
    component: PlaceInsertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaceInsertPageRoutingModule {}
