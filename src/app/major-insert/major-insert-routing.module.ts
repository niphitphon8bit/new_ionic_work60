import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MajorInsertPage } from './major-insert.page';

const routes: Routes = [
  {
    path: '',
    component: MajorInsertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MajorInsertPageRoutingModule {}
