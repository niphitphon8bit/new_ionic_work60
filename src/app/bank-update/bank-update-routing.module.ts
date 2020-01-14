import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BankUpdatePage } from './bank-update.page';

const routes: Routes = [
  {
    path: '',
    component: BankUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BankUpdatePageRoutingModule {}
