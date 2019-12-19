import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpertOutInsertPage } from './expert-out-insert.page';

const routes: Routes = [
  {
    path: '',
    component: ExpertOutInsertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpertOutInsertPageRoutingModule {}
