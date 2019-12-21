import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkillInsertPage } from './skill-insert.page';

const routes: Routes = [
  {
    path: '',
    component: SkillInsertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkillInsertPageRoutingModule {}
