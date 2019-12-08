import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpertInPage } from './expert-in.page';

const routes: Routes = [
  {
    path: '',
    component: ExpertInPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpertInPageRoutingModule {}
