import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpertInInsertPage } from './expert-in-insert.page';

const routes: Routes = [
  {
    path: '',
    component: ExpertInInsertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpertInInsertPageRoutingModule {}
