import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasedataPage } from './basedata.page';

const routes: Routes = [
  { path: '', component: BasedataPage }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasedataPageRoutingModule {}
