import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HikingInProgressPage } from './hiking-in-progress.page';

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
    RouterModule.forChild(routes)
  ],
  declarations: [HikingInProgressPage]
})
export class HikingInProgressPageModule {}