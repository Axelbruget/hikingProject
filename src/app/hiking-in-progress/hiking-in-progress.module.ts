import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HikingInProgressPage } from './hiking-in-progress.page';
import { LeafletMapModule } from '../leaflet-map/leaflet-map.module';
import { TimerModule } from '../timer/timer.module';

const routes: Routes = [
  {
    path: '',
    component: HikingInProgressPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeafletMapModule,
    TimerModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HikingInProgressPage]
})
export class HikingInProgressPageModule {}
