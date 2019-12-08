import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpertOutPage } from './expert-out.page';

const routes: Routes = [
  {
    path: '',
    component: ExpertOutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpertOutPageRoutingModule {}
