import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpertTypeUpdatePage } from './expert-type-update.page';

const routes: Routes = [
  {
    path: '',
    component: ExpertTypeUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpertTypeUpdatePageRoutingModule {}
