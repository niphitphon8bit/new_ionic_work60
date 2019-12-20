import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevelopsInsertPage } from './develops-insert.page';

const routes: Routes = [
  {
    path: '',
    component: DevelopsInsertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevelopsInsertPageRoutingModule {}
