import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevelopsPage } from './develops.page';

const routes: Routes = [
  {
    path: '',
    component: DevelopsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevelopsPageRoutingModule {}
