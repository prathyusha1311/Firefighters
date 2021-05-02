import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrecautionPage } from './precaution.page';

const routes: Routes = [
  {
    path: '',
    component: PrecautionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrecautionPageRoutingModule {}
