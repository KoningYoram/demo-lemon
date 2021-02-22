import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HasIdGuard } from './shared/guards/hasId.interceptor';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./overview/overview.module').then(m => m.OverviewModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then(m => m.DetailModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
