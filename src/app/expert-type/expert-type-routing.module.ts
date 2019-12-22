import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpertTypePage } from "./ExpertTypePage";

const routes: Routes = [
  {
    path: '',
    component: ExpertTypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpertTypePageRoutingModule {}
