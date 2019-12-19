import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpertTypeInsertPage } from './expert-type-insert.page';

const routes: Routes = [
  {
    path: '',
    component: ExpertTypeInsertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpertTypeInsertPageRoutingModule {}
