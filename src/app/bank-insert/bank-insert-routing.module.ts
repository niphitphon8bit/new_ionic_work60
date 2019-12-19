import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BankInsertPage } from './bank-insert.page';

const routes: Routes = [
  {
    path: '',
    component: BankInsertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BankInsertPageRoutingModule {}
