import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevelopsUpdatePage } from './develops-update.page';

const routes: Routes = [
  {
    path: '',
    component: DevelopsUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevelopsUpdatePageRoutingModule {}
