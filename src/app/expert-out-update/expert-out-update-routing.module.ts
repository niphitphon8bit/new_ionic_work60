import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpertOutUpdatePage } from './expert-out-update.page';

const routes: Routes = [
  {
    path: '',
    component: ExpertOutUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpertOutUpdatePageRoutingModule {}
