import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExitPlansPage } from './exit-plans.page';

const routes: Routes = [
  {
    path: '',
    component: ExitPlansPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExitPlansPageRoutingModule {}
