import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaceUpdatePage } from './place-update.page';

const routes: Routes = [
  {
    path: '',
    component: PlaceUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaceUpdatePageRoutingModule {}
