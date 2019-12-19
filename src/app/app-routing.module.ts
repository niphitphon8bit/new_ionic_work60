import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'homes', pathMatch: 'full' },
  {
    path: 'basedata',
    loadChildren: () => import('./basedata/basedata.module').then(m => m.BasedataPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'homes',
    loadChildren: () => import('./homes/homes.module').then(m => m.HomesPageModule)
  },
  {
    path: 'basedata/develops',
    loadChildren: () => import('./develops/develops.module').then( m => m.DevelopsPageModule)
  },
  {
    path: 'basedata/bank',
    loadChildren: () => import('./bank/bank.module').then( m => m.BankPageModule)
  },
  {
    path: 'basedata/food-type',
    loadChildren: () => import('./food-type/food-type.module').then( m => m.FoodTypePageModule)
  },
  {
    path: 'basedata/place',
    loadChildren: () => import('./place/place.module').then( m => m.PlacePageModule)
  },
  {
    path: 'basedata/major',
    loadChildren: () => import('./major/major.module').then( m => m.MajorPageModule)
  },
  {
    path: 'basedata/expert-type',
    loadChildren: () => import('./expert-type/expert-type.module').then( m => m.ExpertTypePageModule)
  },
  {
    path: 'expert/expert-in',
    loadChildren: () => import('./expert-in/expert-in.module').then( m => m.ExpertInPageModule)
  },
  {
    path: 'expert/expert-out',
    loadChildren: () => import('./expert-out/expert-out.module').then( m => m.ExpertOutPageModule)
  },
  {
    path: 'expert',
    loadChildren: () => import('./expert/expert.module').then( m => m.ExpertPageModule)
  },
  {
    path: 'basedata/bank/bank-insert',
    loadChildren: () => import('./bank-insert/bank-insert.module').then( m => m.BankInsertPageModule)
  },
  {
    path: 'basedata/expert-type/expert-type-insert',
    loadChildren: () => import('./expert-type-insert/expert-type-insert.module').then( m => m.ExpertTypeInsertPageModule)
  }  {
    path: 'basedata/food-type/food-insert',
    loadChildren: () => import('./food-insert/food-insert.module').then( m => m.FoodInsertPageModule)
  }];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
