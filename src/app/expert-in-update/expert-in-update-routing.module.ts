import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpertInUpdatePage } from './expert-in-update.page';

const routes: Routes = [
  {
    path: '',
    component: ExpertInUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpertInUpdatePageRoutingModule {}
