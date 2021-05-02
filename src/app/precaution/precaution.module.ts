import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrecautionPageRoutingModule } from './precaution-routing.module';

import { PrecautionPage } from './precaution.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrecautionPageRoutingModule
  ],
  declarations: [PrecautionPage]
})
export class PrecautionPageModule {}
