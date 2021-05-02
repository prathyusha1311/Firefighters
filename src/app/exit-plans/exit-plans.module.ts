import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExitPlansPageRoutingModule } from './exit-plans-routing.module';

import { ExitPlansPage } from './exit-plans.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExitPlansPageRoutingModule
  ],
  declarations: [ExitPlansPage]
})
export class ExitPlansPageModule {}
